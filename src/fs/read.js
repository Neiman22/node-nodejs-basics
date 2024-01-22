import path from 'path';
import { fileURLToPath } from 'url';
import fsPromises from 'fs/promises';

const read = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const fileName = path.join(__dirname, 'files', 'fileToRead.txt');
  
  try {
    const content = await fsPromises.readFile(fileName, { encoding: 'utf8' });
    console.log('Content in "fileToRead.txt" file:');
    console.log(content);
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('FS operation failed: "fileToRead.txt" file does not exist');
    } else {
      console.error(err.message);
    };
  } 
};

await read();