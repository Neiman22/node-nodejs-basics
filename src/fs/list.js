import path from 'path';
import { fileURLToPath } from 'url';
import { readdir } from 'fs/promises';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dirName = path.join(__dirname, 'files');

const list = async () => {
  try {
    const fileList = await readdir(dirName);
    console.log(fileList);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await list();