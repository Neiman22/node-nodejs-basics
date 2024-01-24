import { createReadStream } from 'fs';
import { dirname, join} from 'path';
import { fileURLToPath } from 'url';
import { stdout } from 'process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  const readStream = createReadStream(filePath);
  readStream.pipe(stdout);
};

await read();