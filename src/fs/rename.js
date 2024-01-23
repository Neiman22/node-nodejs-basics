import path from 'path';
import { fileURLToPath } from 'url';
import { rename as renameFile } from 'fs/promises';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const oldName = path.join(__dirname, 'files', 'wrongFilename.txt');
const newName = path.join(__dirname, 'files', 'properFilename.md');

const rename = async () => {
  try {
    await renameFile(oldName, newName);
  } catch (err) { 
    throw new Error('FS operation failed');
  }
};

await rename();