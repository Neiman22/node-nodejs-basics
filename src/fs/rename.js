import path from 'path';
import { fileURLToPath } from 'url';
import fsPromises from 'fs/promises';

const rename = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const oldName = path.join(__dirname, 'files', 'wrongFilename.txt');
  const newName = path.join(__dirname, 'files', 'properFilename.md');

  try {
    await fsPromises.access(newName, fsPromises.constants.F_OK);
    throw new Error('FS operation failed: Destination file "properFilename.md" already exists');
  } catch (err) {
    if (err.code === 'ENOENT') {
      try {
        await fsPromises.rename(oldName, newName);
        console.log('File "wrongFilename.txt" renamed to "properFilename.md"');
      } catch (e) {
        throw new Error('FS operation failed: File "wrongFilename.txt" do not exists');
      }
    } else {
      throw err
    }
  }
};

await rename();