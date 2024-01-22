import path from 'path';
import { fileURLToPath } from 'url';
import fsPromises from 'fs/promises';

const rename = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const oldName = path.join(__dirname, 'files', 'wrongFilename.txt');
  const newName = path.join(__dirname, 'files', 'properFilename.md');

  try {
    await fsPromises.rename(oldName, newName);
    console.log('File "wrongFilename.txt" renamed to "properFilename.md"');
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('FS operation failed: "wrongFilename.txt" file does not exist');
    } else {
      console.error(err.message);
    };
  }
};

await rename();