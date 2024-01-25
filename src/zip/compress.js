import { dirname, join} from 'path';
import { fileURLToPath } from 'url';
import { createReadStream, createWriteStream }from 'fs'
import { pipeline } from 'stream';
import { createGzip } from 'zlib';

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, 'files', 'fileToCompress.txt');
const zibPath = join(__dirname, 'files', 'archive.gz');

const compress = async () => {
  const readStream = createReadStream(filePath);
  const writeStream = createWriteStream(zibPath);
  const gzip = createGzip();

  pipeline(readStream, gzip, writeStream, (err) => {
    if (err) {
      throw new Error(err.message);
    }
  });
};

await compress();