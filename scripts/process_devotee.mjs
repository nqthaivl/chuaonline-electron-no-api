import { Jimp } from 'jimp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function processImage() {
  const inputPath = path.join(__dirname, '../public/assets/devotee_raw.jpg');
  const outputPath = path.join(__dirname, '../public/assets/devotee.png');

  console.log('Loading image:', inputPath);
  const image = await Jimp.read(inputPath);

  const width = image.bitmap.width;
  const height = image.bitmap.height;
  console.log(`Dimensions: ${width}x${height}`);

  let minX = width, maxX = 0, minY = height, maxY = 0;

  image.scan(0, 0, width, height, (x, y, idx) => {
    const r = image.bitmap.data[idx + 0];
    const g = image.bitmap.data[idx + 1];
    const b = image.bitmap.data[idx + 2];

    // Check if pixel is green background
    // Pure green or bright green
    const isGreen = (g > 110 && g > r * 1.25 && g > b * 1.25) || (g > 140 && g - Math.max(r, b) > 35);

    if (isGreen) {
      image.bitmap.data[idx + 3] = 0; // Transparent
    } else {
      // Clean green spill on edges
      if (g > Math.max(r, b) && g - Math.max(r, b) < 40) {
        image.bitmap.data[idx + 1] = Math.round((r + b) / 2);
      }
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  });

  console.log(`Bounding box: x=${minX}..${maxX}, y=${minY}..${maxY}`);
  if (minX < maxX && minY < maxY) {
    const cropW = maxX - minX + 1;
    const cropH = maxY - minY + 1;
    image.crop({ x: minX, y: minY, w: cropW, h: cropH });
  }

  // Resize to a standard devotee sprite size, e.g. 240px height
  image.resize({ h: 240 });

  await image.write(outputPath);
  console.log('Saved transparent devotee sprite to:', outputPath);
}

processImage().catch(console.error);

