import path from 'path';
import { fileURLToPath } from 'url';
import { rm } from 'fs/promises';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const fileName = path.join(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
  try {
    await rm(fileName);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await remove();