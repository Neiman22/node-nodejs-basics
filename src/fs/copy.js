import path from 'path';
import { fileURLToPath } from 'url';
import { cp } from 'fs/promises';

const copy = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const src = path.join(__dirname, 'files');
  const dest = path.join(__dirname, 'files_copy');

  try {
    await cp(src, dest, { recursive: true, force: false, errorOnExist: true });
    console.log('Folder copied');
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.error(`FS operation failed: no such directory`);
    } if (err.code === 'ERR_FS_CP_EEXIST') {
      console.error(`FS operation failed: folder already exists`);
    } else {
      throw err;
    }
  }
};

await copy();
