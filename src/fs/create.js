import path from 'path';
import { fileURLToPath } from 'url';
import { writeFile } from 'fs/promises';

const create = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, 'files', 'fresh.txt');

  try {
    await writeFile(filePath, 'I am fresh and young', {flag: 'wx'});
    console.log('File "fresh.txt" created');
  } catch (err) {
    if (err.code === 'EEXIST') {
      throw new Error('FS operation failed: File already exists');
    } else {
      console.error('Error:', err.message);
    }
  }
};

await create();