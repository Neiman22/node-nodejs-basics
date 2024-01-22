import path from 'path';
import { fileURLToPath } from 'url';
import fsPromises from 'fs/promises';

const remove = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const fileName = path.join(__dirname, 'files', 'fileToRemove.txt');
  
  try {
    await fsPromises.rm(fileName);
    console.log('File "fileToRemove.txt" removed');
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('FS operation failed: "fileToRemove.txt" file does not exist');
    } else {
      console.error(err.message);
    };
  }
};

await remove();