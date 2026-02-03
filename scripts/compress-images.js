const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const images = [
    'friendcircle.webp',
    'lenscapes.webp',
    'carepulse.webp',
    'resumind.webp'
];

const publicDir = path.join(__dirname, '../public');

async function compressImage(filename) {
    const filePath = path.join(publicDir, filename);
    if (!fs.existsSync(filePath)) {
        console.log(`❌ ${filename} not found at ${filePath}`);
        return;
    }

    const tempPath = path.join(publicDir, `temp_${filename}`);

    try {
        const metadata = await sharp(filePath).metadata();
        console.log(`Processing ${filename} (Original Width: ${metadata.width}px, Size: ${(fs.statSync(filePath).size / 1024).toFixed(2)}KB)`);

        // Resize to max width 1920 (or 1200 as requested) and compress
        // User asked for ~100KB. 1200px width and 75-80 quality usually achieves this for webp.
        await sharp(filePath)
            .resize({ width: 1200, withoutEnlargement: true })
            .webp({ quality: 75 })
            .toFile(tempPath);

        const oldSize = fs.statSync(filePath).size;
        const newSize = fs.statSync(tempPath).size;

        // Only replace if new size is smaller
        if (newSize < oldSize) {
            fs.unlinkSync(filePath); // Remove old file
            fs.renameSync(tempPath, filePath); // Rename temp to original
            console.log(`✅ Compressed ${filename}: ${(oldSize / 1024).toFixed(2)}KB -> ${(newSize / 1024).toFixed(2)}KB`);
        } else {
            console.log(`⚠️  Skipping ${filename}: New size (${(newSize / 1024).toFixed(2)}KB) is not smaller than original.`);
            fs.unlinkSync(tempPath);
        }

    } catch (error) {
        console.error(`❌ Error compressing ${filename}:`, error);
        if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
    }
}

async function main() {
    console.log('Starting image compression...');
    for (const img of images) {
        await compressImage(img);
    }
    console.log('Done.');
}

main();
