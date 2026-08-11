const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const SIZES = [400, 800];
const INPUT_DIR = './public/images';
const GALLERY_DIR = './src/assets/gallery';

async function resizeFile(inputPath, outputDir, filename, sizes) {
  for (const size of sizes) {
    const outputPath = path.join(outputDir, filename.replace(/\.[^/.]+$/, `-${size}w.webp`));
    await sharp(inputPath)
      .resize(size, null, { withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(outputPath);
    console.log(`Created: ${outputPath}`);
  }
}

async function createSmallLogo() {
  const logoPath = path.join(INPUT_DIR, 'bam-logo.webp');
  if (fs.existsSync(logoPath)) {
    const outPath = path.join(INPUT_DIR, 'bam-logo-sm.webp');
    await sharp(logoPath)
      .resize(200, null, { withoutEnlargement: true })
      .webp({ quality: 85 })
      .toFile(outPath);
    console.log(`Created: ${outPath}`);
  }
}

async function createHeroVariant() {
  const heroPath = path.join(INPUT_DIR, 'hospital-exterior.webp');
  if (fs.existsSync(heroPath)) {
    const outPath = path.join(INPUT_DIR, 'hospital-exterior-800w.webp');
    await sharp(heroPath)
      .resize(800, null, { withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(outPath);
    console.log(`Created: ${outPath}`);
  }
}

async function createAboutVariant() {
  const aboutPath = path.join(INPUT_DIR, 'about-care.jpg');
  if (fs.existsSync(aboutPath)) {
    // Create 800w webp variant
    const outPath = path.join(INPUT_DIR, 'about-care-800w.webp');
    await sharp(aboutPath)
      .resize(800, null, { withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(outPath);
    console.log(`Created: ${outPath}`);
  }
}

async function resize() {
  // 1. Resize public/images (skip already-resized files)
  if (fs.existsSync(INPUT_DIR)) {
    const files = fs.readdirSync(INPUT_DIR).filter(f => {
      return /\.(jpg|jpeg|png|webp)$/i.test(f) && !/-\d+w\.webp$/.test(f) && !/-sm\.webp$/.test(f);
    });
    for (const file of files) {
      await resizeFile(path.join(INPUT_DIR, file), INPUT_DIR, file, SIZES);
    }
  }

  // 2. Resize gallery images
  if (fs.existsSync(GALLERY_DIR)) {
    const files = fs.readdirSync(GALLERY_DIR).filter(f => {
      return /\.(jpg|jpeg|png|webp)$/i.test(f) && !/-\d+w\.webp$/.test(f);
    });
    for (const file of files) {
      await resizeFile(path.join(GALLERY_DIR, file), GALLERY_DIR, file, SIZES);
    }
  }

  // 3. Create special variants
  await createSmallLogo();
  await createHeroVariant();
  await createAboutVariant();
}

resize().catch(console.error);