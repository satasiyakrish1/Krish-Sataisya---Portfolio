const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const GALLERY_DIR = path.join(__dirname, '../public/assets/gallery');
const THUMBS_DIR = path.join(GALLERY_DIR, 'thumbs');

if (!fs.existsSync(THUMBS_DIR)) {
  fs.mkdirSync(THUMBS_DIR, { recursive: true });
}

async function processImages() {
  const files = fs.readdirSync(GALLERY_DIR);
  let count = 0;

  for (const file of files) {
    const fullPath = path.join(GALLERY_DIR, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) continue;

    const ext = path.extname(file).toLowerCase();
    if (!['.jpg', '.jpeg', '.png', '.webp', '.jfif'].includes(ext)) continue;

    const baseName = path.basename(file, path.extname(file));
    const outPath = path.join(THUMBS_DIR, `${baseName}.webp`);

    try {
      await sharp(fullPath)
        .rotate() // auto-orient based on EXIF
        .resize({ width: 700, withoutEnlargement: true })
        .webp({ quality: 80, effort: 4 })
        .toFile(outPath);
      count++;
    } catch (err) {
      console.error(`Error processing ${file}:`, err.message);
    }
  }

  console.log(`Successfully generated ${count} thumbnails in ${THUMBS_DIR}`);
}

processImages();
