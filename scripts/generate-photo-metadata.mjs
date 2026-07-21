import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const galleriesPath = path.join(root, "data", "galleries.ts");
const outputPath = path.join(root, "data", "photo-metadata.ts");

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

async function getMetadata(src) {
  const candidates = [optimizedToOriginal(src), src];
  let metadata;
  let imageMetadata;

  for (const candidate of candidates) {
    const filePath = toFilePath(candidate);
    try {
      imageMetadata = await sharp(filePath).metadata();
      metadata = imageMetadata.exif ? parseExif(imageMetadata.exif) : {};
      if (Object.keys(metadata).length > 0 || candidate === src) {
        break;
      }
    } catch {
      continue;
    }
  }

  if (!imageMetadata) {
    return { rows: ["NO DATA"] };
  }

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

const entries = {};
for (const src of imagePaths) {
  entries[src] = await getMetadata(src);
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
console.log(`Generated metadata for ${imagePaths.length} images (${withExif} with EXIF).`);
