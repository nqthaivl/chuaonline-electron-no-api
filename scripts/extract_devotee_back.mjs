import { Jimp } from 'jimp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function extract() {
  const input = path.join(__dirname, '../reference_screenshot.jpg');
  const img = await Jimp.read(input);

  console.log(`Dimensions: ${img.bitmap.width}x${img.bitmap.height}`);

  // Let's crop a few devotee candidates from the screenshot
  // Devotee near bottom right, e.g. "Trang Anh" or "Trang Phương" or devotee on red carpet
  // In 514x945:
  // Center carpet devotee: x around 245..275, y around 680..745
  const centerDevotee = img.clone().crop({ x: 240, y: 685, w: 38, h: 50 });
  await centerDevotee.write(path.join(__dirname, '../public/assets/candidate_center.png'));

  // Lower row devotee:
  // e.g. x around 275..325, y around 865..930
  const lowerDevotee1 = img.clone().crop({ x: 275, y: 865, w: 45, h: 58 });
  await lowerDevotee1.write(path.join(__dirname, '../public/assets/candidate_lower1.png'));

  // e.g. x around 350..400, y around 865..930
  const lowerDevotee2 = img.clone().crop({ x: 355, y: 865, w: 45, h: 58 });
  await lowerDevotee2.write(path.join(__dirname, '../public/assets/candidate_lower2.png'));

  console.log('Candidates saved!');
}

extract().catch(console.error);

