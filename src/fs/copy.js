import path from 'path';
import { fileURLToPath } from 'url';
import { cp } from 'fs/promises';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(__dirname, 'files');
const dest = path.join(__dirname, 'files_copy');

const copy = async () => {
  try {
    await cp(src, dest, { recursive: true, force: false, errorOnExist: true });
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await copy();
