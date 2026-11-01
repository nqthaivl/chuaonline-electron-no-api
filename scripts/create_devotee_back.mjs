import { Jimp } from 'jimp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function cleanDevotee() {
  const input = path.join(__dirname, '../public/assets/candidate_lower1.png');
  const output = path.join(__dirname, '../public/assets/devotee_back.png');

  const img = await Jimp.read(input);
  const w = img.bitmap.width;
  const h = img.bitmap.height;

  // Mask out dark wooden floor:
  // The devotee's áo lam robe is light blue-grey: r > 100, g > 115, b > 125
  // The dark floor is dark reddish-brown: r < 90, b < 70
  // Hair at the top is dark, but located in upper center
  
  img.scan(0, 0, w, h, (x, y, idx) => {
    const r = img.bitmap.data[idx + 0];
    const g = img.bitmap.data[idx + 1];
    const b = img.bitmap.data[idx + 2];

    const brightness = (r + g + b) / 3;
    const isBrownFloor = (r > b * 1.3 && brightness < 80) || (brightness < 45);

    // Keep devotee body
    const isDevoteeRobe = (brightness > 95 && b >= r * 0.95);
    const isDevoteeHair = (y < 22 && x > 14 && x < 32 && brightness > 30);

    if (!isDevoteeRobe && !isDevoteeHair && isBrownFloor) {
      img.bitmap.data[idx + 3] = 0; // transparent
    } else if (!isDevoteeRobe && !isDevoteeHair && (x < 6 || x > w - 6 || y < 4)) {
      img.bitmap.data[idx + 3] = 0;
    }
  });

  // Scale up slightly for clean crisp rendering
  img.resize({ h: 180 });
  await img.write(output);
  console.log('Saved devotee_back.png!');
}

cleanDevotee().catch(console.error);

