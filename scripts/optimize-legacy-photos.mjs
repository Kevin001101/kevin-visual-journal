import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const photosRoot = path.join(root, "public", "photos");
const legacyGalleries = [
  "macau",
  "hong-kong",
  "mount-wutai",
  "changbai-mountain",
  "lhasa",
  "bronze-head",
];

const outputProfiles = [
  { folder: "detail", max: 2200, quality: 78 },
  { folder: "wall", max: 1200, quality: 72 },
];

async function optimizeImage(inputPath, outputPath, { max, quality }) {
  await fs.mkdir(path.dirname(outputPath), { recursive: true });

  await sharp(inputPath)
    .rotate()
    .resize({
      width: max,
      height: max,
      fit: "inside",
      withoutEnlargement: true,
    })
    .jpeg({
      quality,
      mozjpeg: true,
    })
    .toFile(outputPath);
}

async function optimizeGallery(gallery) {
  const sourceDir = path.join(photosRoot, gallery);
  const entries = await fs.readdir(sourceDir, { withFileTypes: true });
  const files = entries
    .filter((entry) => entry.isFile() && /\.(jpe?g)$/i.test(entry.name))
    .map((entry) => entry.name);

  for (const file of files) {
    const input = path.join(sourceDir, file);
    for (const profile of outputProfiles) {
      const output = path.join(photosRoot, "optimized", gallery, profile.folder, file);
      await optimizeImage(input, output, profile);
    }
  }

  return files.length;
}

async function optimizeCovers() {
  const sourceDir = path.join(photosRoot, "covers");
  const outputDir = path.join(photosRoot, "optimized", "covers");
  const entries = await fs.readdir(sourceDir, { withFileTypes: true });
  const files = entries
    .filter((entry) => entry.isFile() && /\.(jpe?g)$/i.test(entry.name))
    .map((entry) => entry.name);

  for (const file of files) {
    await optimizeImage(path.join(sourceDir, file), path.join(outputDir, file), {
      max: 2200,
      quality: 78,
    });
  }

  return files.length;
}

let total = 0;
for (const gallery of legacyGalleries) {
  total += await optimizeGallery(gallery);
}
total += await optimizeCovers();

console.log(`Optimized ${total} source images.`);
