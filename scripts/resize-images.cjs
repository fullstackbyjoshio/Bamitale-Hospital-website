const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const SIZES = [400, 800];
const INPUT_DIR = './public/images';
const GALLERY_DIR = './src/assets/gallery';

async function resizeFile(inputPath, outputDir, filename) {
  for (const size of SIZES) {
    const outputPath = path.join(outputDir, filename.replace(/\.[^/.]+$/, `-${size}w.webp`));
    await sharp(inputPath)
      .resize(size, null, { withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(outputPath);
    console.log(`Created: ${outputPath}`);
  }
}

async function resize() {
  // Resize public/images (hero, about, etc.)
  if (fs.existsSync(INPUT_DIR)) {
    const files = fs.readdirSync(INPUT_DIR).filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f));
    for (const file of files) {
      await resizeFile(path.join(INPUT_DIR, file), INPUT_DIR, file);
    }
  }

  // Resize gallery images
  if (fs.existsSync(GALLERY_DIR)) {
    const files = fs.readdirSync(GALLERY_DIR).filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f));
    for (const file of files) {
      await resizeFile(path.join(GALLERY_DIR, file), GALLERY_DIR, file);
    }
  }
}

resize().catch(console.error);