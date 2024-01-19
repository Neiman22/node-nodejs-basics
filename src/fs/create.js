import path from 'path';
import { fileURLToPath } from 'url';
import fsPromises from 'fs/promises';

const create = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, 'files', 'fresh.txt');

  try {
    await fsPromises.writeFile(filePath, 'I am fresh and young', {flag: 'wx'});
    console.log('File "fresh.txt" created');
  } catch (err) {
    if (err.code === 'EEXIST') {
      console.error(`FS operation failed: file already exists`);
    } else {
      throw err;
    }
  }
};

await create();