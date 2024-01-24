import { dirname, join} from 'path';
import { fileURLToPath } from 'url';
import { createReadStream, createWriteStream }from 'fs'
import { pipeline } from 'stream';
import { createGunzip, createUnzip } from 'zlib';

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, 'files', 'fileToCompress.txt');
const zibPath = join(__dirname, 'files', 'archive.gz');

const decompress = async () => {
  const readStream = createReadStream(zibPath);
  const writeStream = createWriteStream(filePath);
  const gzip = createGunzip();

  pipeline(readStream, gzip, writeStream, (err) => {
    if (err) {
      throw new Error(err.message);
    }
  });
};

await decompress();