import sharp from 'sharp';
import { readdir } from 'node:fs/promises';
import { extname, join } from 'node:path';

const folders = [
  'src/assets/logo',
  'src/assets/dentista',
  'src/assets/resultados',
  'src/assets/tratamentos',
];

for (const folder of folders) {
  const files = await readdir(folder);
  for (const file of files) {
    if (!['.jpg', '.jpeg', '.png'].includes(extname(file).toLowerCase())) continue;
    const input = join(folder, file);
    const output = join(folder, file.replace(/\.(jpe?g|png)$/i, '.webp'));
    await sharp(input)
      .rotate()
      .resize({ width: 2000, height: 2000, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 84, effort: 5 })
      .toFile(output);
    console.log(`${input} -> ${output}`);
  }
}
