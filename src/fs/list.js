import path from 'path';
import { fileURLToPath } from 'url';
import fsPromises from 'fs/promises';

const list = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const dirName = path.join(__dirname, 'files');
  
  try {
    const files = await fsPromises.readdir(dirName);
    console.log('Files in "files" folder:');
    files.map(file => console.log(file));
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('FS operation failed: "files" folder does not exist');
    } else {
      console.error(err.message);
    };
  }
};

await list();