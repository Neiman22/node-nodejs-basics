import path from 'path';
import { fileURLToPath } from 'url';
import { open, writeFile } from 'node:fs/promises';

const create = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, 'files', 'fresh.txt');

  try {
    await open(filePath, 'wx');
    await writeFile(filePath, 'I am fresh and young');
    console.log('File fresh.txt created');
  } catch (err) {
    if (err.code === 'EEXIST') {
      console.error('FS operation failed: file already exists');
    } else {
      throw err;
    }
  }
};

await create();