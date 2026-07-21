import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const galleriesPath = path.join(root, "data", "galleries.ts");
const outputPath = path.join(root, "data", "photo-metadata.ts");
const confirmedMappingPath = path.join(root, "photo-mapping-1.csv");
const matchCandidatesPath = path.join(root, "photo-match-candidates.csv");
const externalAlbumRoot = "E:\\相册";
const groupAlbumRoots = {
  "birding": ["E:\\相册\\观鸟"],
  "bronze-head": ["E:\\相册\\铜首"],
  "changbai-mountain": ["E:\\相册\\沈阳-长白山"],
  "changsha": ["E:\\相册\\长沙"],
  "hong-kong": ["E:\\相册\\香港"],
  "kula-kangri": ["E:\\相册\\西藏\\库拉岗日"],
  "macau": ["E:\\相册\\澳门"],
  "macau-fireworks": ["E:\\相册\\澳门烟花"],
  "maclehose-trail": ["E:\\相册\\香港"],
  "mount-siguniang": ["E:\\相册\\四川"],
  "mount-wutai": ["E:\\相册\\山西五台山"],
  "nanchang": ["E:\\相册\\南昌"],
  "wuhan": ["E:\\相册\\武汉"],
  "wugongshan": ["E:\\相册\\武功山"],
  "xian": ["E:\\相册\\西安"],
  "lhasa": ["E:\\相册\\西藏\\拉萨"],
};
const fingerprintSize = 12;
const maxSimilarityDistance = 18;

const TYPE_SIZE = {
  1: 1,
  2: 1,
  3: 2,
  4: 4,
  5: 8,
  7: 1,
  9: 4,
  10: 8,
};

const TAGS = {
  0x010f: "Make",
  0x0110: "Model",
  0x0132: "DateTime",
  0x8769: "ExifIFDPointer",
  0x829a: "ExposureTime",
  0x829d: "FNumber",
  0x8827: "ISO",
  0x9003: "DateTimeOriginal",
  0x9201: "ShutterSpeedValue",
  0x9202: "ApertureValue",
  0x9204: "ExposureBiasValue",
  0x9209: "Flash",
  0x920a: "FocalLength",
  0xa405: "FocalLength35mm",
  0xa434: "LensModel",
};

const formatDecimal = (value, digits = 1) =>
  Number(value).toFixed(digits).replace(/\.0$/, "");

const formatExposure = (value) => {
  if (!value || !Number.isFinite(value)) {
    return undefined;
  }

  return value >= 1 ? `${formatDecimal(value)}s` : `1/${Math.round(1 / value)}s`;
};

const formatDate = (value) => {
  if (!value || typeof value !== "string") {
    return undefined;
  }

  const match = value.match(/^(\d{4}):(\d{2}):(\d{2})\s+(\d{2}):(\d{2})/);
  if (!match) {
    return value;
  }

  return `${match[1]}.${match[2]}.${match[3]} ${match[4]}:${match[5]}`;
};

const optimizedToOriginal = (src) =>
  src
    .replace("/photos/optimized/", "/photos/")
    .replace("/detail/", "/")
    .replace("/wall/", "/");

const toFilePath = (src) => path.join(root, "public", ...src.split("/").slice(1));

async function pathExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];

    if (inQuotes) {
      if (char === '"' && next === '"') {
        field += '"';
        index += 1;
      } else if (char === '"') {
        inQuotes = false;
      } else {
        field += char;
      }
      continue;
    }

    if (char === '"') {
      inQuotes = true;
    } else if (char === ",") {
      row.push(field);
      field = "";
    } else if (char === "\n") {
      row.push(field.replace(/\r$/, ""));
      rows.push(row);
      row = [];
      field = "";
    } else {
      field += char;
    }
  }

  if (field.length > 0 || row.length > 0) {
    row.push(field.replace(/\r$/, ""));
    rows.push(row);
  }

  return rows.filter((values) => values.some(Boolean));
}

async function readConfirmedMapping() {
  const sourcePath = (await pathExists(matchCandidatesPath))
    ? matchCandidatesPath
    : confirmedMappingPath;
  if (!(await pathExists(sourcePath))) {
    return new Map();
  }

  const rows = parseCsv((await fs.readFile(sourcePath, "utf8")).replace(/^\uFEFF/, ""));
  const header = rows.shift();
  if (!header) {
    return new Map();
  }

  const records = rows.map((row) =>
    Object.fromEntries(header.map((column, index) => [column, row[index] ?? ""])),
  );
  const mapping = new Map();

  for (const record of records) {
    const originalPath = record.candidate_path ?? record.original_path;
    if (!record.website_path || !originalPath) {
      continue;
    }

    const paths = mapping.get(record.website_path) ?? [];
    if (!paths.includes(originalPath)) {
      paths.push(originalPath);
      mapping.set(record.website_path, paths);
    }
  }

  return mapping;
}

async function collectExternalImages(directory, output = new Map()) {
  if (!(await pathExists(directory))) {
    return output;
  }

  const entries = await fs.readdir(directory, { withFileTypes: true });
  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await collectExternalImages(entryPath, output);
      continue;
    }

    if (!entry.isFile() || !/\.(jpe?g)$/i.test(entry.name)) {
      continue;
    }

    const key = entry.name.toLowerCase();
    const images = output.get(key) ?? [];
    images.push(entryPath);
    output.set(key, images);
  }

  return output;
}

async function collectImagesFromRoots(roots) {
  const files = [];

  async function visit(directory) {
    if (!(await pathExists(directory))) {
      return;
    }

    const entries = await fs.readdir(directory, { withFileTypes: true });
    for (const entry of entries) {
      const entryPath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        await visit(entryPath);
      } else if (entry.isFile() && /\.(jpe?g)$/i.test(entry.name)) {
        files.push(entryPath);
      }
    }
  }

  for (const rootPath of roots) {
    await visit(rootPath);
  }

  return files;
}

const readUInt16 = (buffer, offset, littleEndian) =>
  littleEndian ? buffer.readUInt16LE(offset) : buffer.readUInt16BE(offset);

const readUInt32 = (buffer, offset, littleEndian) =>
  littleEndian ? buffer.readUInt32LE(offset) : buffer.readUInt32BE(offset);

const readInt32 = (buffer, offset, littleEndian) =>
  littleEndian ? buffer.readInt32LE(offset) : buffer.readInt32BE(offset);

function parseValue(buffer, tiffOffset, littleEndian, type, count, valueOffset) {
  const size = TYPE_SIZE[type] ?? 1;
  const total = size * count;
  const offset =
    total <= 4 ? valueOffset : tiffOffset + readUInt32(buffer, valueOffset, littleEndian);

  if (offset < 0 || offset + total > buffer.length) {
    return undefined;
  }

  if (type === 2) {
    return buffer.toString("ascii", offset, offset + count).replace(/\0+$/, "");
  }

  if (type === 3) {
    return count === 1
      ? readUInt16(buffer, offset, littleEndian)
      : Array.from({ length: count }, (_, index) =>
          readUInt16(buffer, offset + index * 2, littleEndian),
        );
  }

  if (type === 4) {
    return count === 1
      ? readUInt32(buffer, offset, littleEndian)
      : Array.from({ length: count }, (_, index) =>
          readUInt32(buffer, offset + index * 4, littleEndian),
        );
  }

  if (type === 5) {
    const readRational = (entryOffset) =>
      readUInt32(buffer, entryOffset, littleEndian) /
      readUInt32(buffer, entryOffset + 4, littleEndian);

    return count === 1
      ? readRational(offset)
      : Array.from({ length: count }, (_, index) => readRational(offset + index * 8));
  }

  if (type === 9) {
    return count === 1
      ? readInt32(buffer, offset, littleEndian)
      : Array.from({ length: count }, (_, index) =>
          readInt32(buffer, offset + index * 4, littleEndian),
        );
  }

  if (type === 10) {
    const readSignedRational = (entryOffset) =>
      readInt32(buffer, entryOffset, littleEndian) /
      readInt32(buffer, entryOffset + 4, littleEndian);

    return count === 1
      ? readSignedRational(offset)
      : Array.from({ length: count }, (_, index) => readSignedRational(offset + index * 8));
  }

  return undefined;
}

function parseIfd(buffer, tiffOffset, littleEndian, ifdOffset, output) {
  const base = tiffOffset + ifdOffset;
  if (base < 0 || base + 2 > buffer.length) {
    return;
  }

  const entries = readUInt16(buffer, base, littleEndian);
  for (let index = 0; index < entries; index += 1) {
    const entry = base + 2 + index * 12;
    if (entry + 12 > buffer.length) {
      continue;
    }

    const tag = readUInt16(buffer, entry, littleEndian);
    const type = readUInt16(buffer, entry + 2, littleEndian);
    const count = readUInt32(buffer, entry + 4, littleEndian);
    const value = parseValue(buffer, tiffOffset, littleEndian, type, count, entry + 8);
    const name = TAGS[tag];

    if (name && name !== "ExifIFDPointer") {
      output[name] = value;
    }

    if (tag === 0x8769 && typeof value === "number") {
      parseIfd(buffer, tiffOffset, littleEndian, value, output);
    }
  }
}

function parseExif(buffer) {
  const output = {};
  const tiffOffset = buffer.toString("ascii", 0, 6) === "Exif\0\0" ? 6 : 0;
  const byteOrder = buffer.toString("ascii", tiffOffset, tiffOffset + 2);
  const littleEndian = byteOrder === "II";

  if (!littleEndian && byteOrder !== "MM") {
    return output;
  }

  const firstIfdOffset = readUInt32(buffer, tiffOffset + 4, littleEndian);
  parseIfd(buffer, tiffOffset, littleEndian, firstIfdOffset, output);
  return output;
}

function metadataScore(metadata, imageMetadata) {
  let score = 0;
  if (metadata.Make) score += 5;
  if (metadata.Model) score += 5;
  if (metadata.LensModel) score += 4;
  if (metadata.ISO) score += 3;
  if (metadata.FNumber) score += 3;
  if (metadata.ExposureTime) score += 3;
  if (metadata.FocalLength) score += 2;
  if (metadata.DateTimeOriginal || metadata.DateTime) score += 1;
  return score * 1000000 + (imageMetadata.exif?.length ?? 0);
}

function buildRows(metadata, width, height) {
  const rows = [];
  const camera = [metadata.Make, metadata.Model].filter(Boolean).join(" ").trim();

  if (camera) rows.push(camera);
  if (metadata.LensModel) rows.push(String(metadata.LensModel));
  if (metadata.ISO) rows.push(`ISO ${metadata.ISO}`);
  if (metadata.FNumber) rows.push(`F${formatDecimal(metadata.FNumber)}`);
  if (metadata.ExposureTime) rows.push(formatExposure(metadata.ExposureTime));
  if (metadata.FocalLength) rows.push(`${formatDecimal(metadata.FocalLength, 0)}MM`);
  if (metadata.DateTimeOriginal || metadata.DateTime) {
    rows.push(formatDate(metadata.DateTimeOriginal ?? metadata.DateTime));
  }

  rows.push(`${width} x ${height}`);

  return rows.filter(Boolean);
}

async function readImageMetadata(filePath) {
  const imageMetadata = await sharp(filePath).metadata();
  const metadata = imageMetadata.exif ? parseExif(imageMetadata.exif) : {};
  return { imageMetadata, metadata, score: metadataScore(metadata, imageMetadata) };
}

async function getFingerprint(filePath, cache) {
  if (cache.has(filePath)) {
    return cache.get(filePath);
  }

  try {
    const data = await sharp(filePath)
      .rotate()
      .resize(fingerprintSize, fingerprintSize, { fit: "fill" })
      .removeAlpha()
      .raw()
      .toBuffer();
    cache.set(filePath, data);
    return data;
  } catch {
    cache.set(filePath, undefined);
    return undefined;
  }
}

function fingerprintDistance(a, b) {
  if (!a || !b || a.length !== b.length) {
    return Number.POSITIVE_INFINITY;
  }

  let total = 0;
  for (let index = 0; index < a.length; index += 1) {
    total += Math.abs(a[index] - b[index]);
  }

  return total / a.length;
}

const groupFromSrc = (src) => src.split("/")[3];

async function findVisualMatch(src, groupImages, fingerprintCache) {
  const group = groupFromSrc(src);
  const candidateFiles = groupImages.get(group) ?? [];
  if (candidateFiles.length === 0) {
    return undefined;
  }

  const websitePath = toFilePath(src);
  const websiteFingerprint = await getFingerprint(websitePath, fingerprintCache);
  if (!websiteFingerprint) {
    return undefined;
  }

  let best;
  for (const filePath of candidateFiles) {
    let candidate;
    try {
      candidate = await readImageMetadata(filePath);
    } catch {
      continue;
    }

    if (candidate.score < 1000000) {
      continue;
    }

    const candidateFingerprint = await getFingerprint(filePath, fingerprintCache);
    const distance = fingerprintDistance(websiteFingerprint, candidateFingerprint);
    if (!best || distance < best.distance) {
      best = { ...candidate, distance };
    }
  }

  return best && best.distance <= maxSimilarityDistance ? best : undefined;
}

async function getMetadata(src, confirmedMapping, externalImages, groupImages, fingerprintCache) {
  const confirmedOriginals = confirmedMapping.get(src) ?? [];
  const websiteCandidates = [optimizedToOriginal(src), src].map(toFilePath);
  const fileName = path.basename(src).toLowerCase();
  const externalCandidates = externalImages.get(fileName) ?? [];
  const candidates = [
    ...confirmedOriginals,
    ...websiteCandidates,
    ...externalCandidates,
  ];
  let best;

  for (const filePath of candidates) {
    try {
      const candidate = await readImageMetadata(filePath);
      if (!best || candidate.score > best.score) {
        best = candidate;
      }
    } catch {
      continue;
    }
  }

  if (!best || best.score < 1000000) {
    const visualMatch = await findVisualMatch(src, groupImages, fingerprintCache);
    if (visualMatch && (!best || visualMatch.score > best.score)) {
      best = visualMatch;
    }
  }

  if (!best) {
    return { rows: ["NO DATA"] };
  }

  const { imageMetadata, metadata } = best;
  const rows = buildRows(metadata, imageMetadata.width, imageMetadata.height);
  return {
    camera: [metadata.Make, metadata.Model].filter(Boolean).join(" ").trim() || undefined,
    lens: metadata.LensModel || undefined,
    iso: metadata.ISO ? String(metadata.ISO) : undefined,
    aperture: metadata.FNumber ? `F${formatDecimal(metadata.FNumber)}` : undefined,
    shutter: formatExposure(metadata.ExposureTime),
    focalLength: metadata.FocalLength
      ? `${formatDecimal(metadata.FocalLength, 0)}MM`
      : undefined,
    capturedAt: formatDate(metadata.DateTimeOriginal ?? metadata.DateTime),
    rows: rows.length > 1 ? rows : ["NO EXIF", `${imageMetadata.width} x ${imageMetadata.height}`],
  };
}

const galleriesSource = await fs.readFile(galleriesPath, "utf8");
const imagePaths = [
  ...new Set(
    [...galleriesSource.matchAll(/"((?:\/photos\/optimized\/[^"]+\/detail\/[^"]+\.jpg))"/g)].map(
      (match) => match[1],
    ),
  ),
].sort();

const confirmedMapping = await readConfirmedMapping();
const missingMappedImages = imagePaths.filter((src) => !confirmedMapping.has(src));
const externalImages =
  missingMappedImages.length > 0 ? await collectExternalImages(externalAlbumRoot) : new Map();
const groupImages = new Map();
if (missingMappedImages.length > 0) {
  for (const [group, roots] of Object.entries(groupAlbumRoots)) {
    groupImages.set(group, await collectImagesFromRoots(roots));
  }
}
const fingerprintCache = new Map();
const entries = {};
for (const src of imagePaths) {
  entries[src] = await getMetadata(
    src,
    confirmedMapping,
    externalImages,
    groupImages,
    fingerprintCache,
  );
}

const withExif = Object.values(entries).filter((entry) => entry.camera || entry.iso).length;
const file = `export type PhotoMetadata = {
  camera?: string;
  lens?: string;
  iso?: string;
  aperture?: string;
  shutter?: string;
  focalLength?: string;
  capturedAt?: string;
  rows: string[];
};

export const photoMetadata: Record<string, PhotoMetadata> = ${JSON.stringify(
  entries,
  null,
  2,
)};
`;

await fs.writeFile(outputPath, file);
console.log(
  `Generated metadata for ${imagePaths.length} images (${withExif} with EXIF, ${confirmedMapping.size} mapped originals).`,
);
