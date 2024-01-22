import path from 'path';
import { fileURLToPath } from 'url';
import { cp } from 'fs/promises';

const copy = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const src = path.join(__dirname, 'files');
  const dest = path.join(__dirname, 'files_copy');

  try {
    await cp(src, dest, { recursive: true, force: false, errorOnExist: true });
    console.log('Folder "files" copied to "files_copy"');
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('FS operation failed: "files" folder does not exist');
    } else if (err.code === 'ERR_FS_CP_EEXIST') {
      throw new Error('FS operation failed: "files_copy" folder already exists');
    } else {
      console.error('Error:', err.message);
    }
  }
};

await copy();
