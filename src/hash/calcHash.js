import { dirname, join} from 'path';
import { fileURLToPath } from 'url';
import { createReadStream }from 'fs'
import { createHash } from 'crypto';

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
  const hash = createHash('sha256');
  const stream = createReadStream(filePath);

  stream.on('data', (data) => hash.update(data));
  stream.on('end', () => console.log(hash.digest('hex')));
  stream.on('error', (error) => console.error(`Error: ${error.message}`));
};

await calculateHash();