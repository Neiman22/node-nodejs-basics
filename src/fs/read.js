import path from 'path';
import { fileURLToPath } from 'url';
import { readFile } from 'fs/promises';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const fileName = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  try {
    const content = await readFile(fileName, { encoding: 'utf8' });
    console.log(content);
  } catch (err) {
    throw new Error('FS operation failed');
  } 
};

await read();