import { createReadStream } from 'fs';
import { dirname, join} from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  const stream = createReadStream(filePath);
  stream.pipe(process.stdout);
};

await read();