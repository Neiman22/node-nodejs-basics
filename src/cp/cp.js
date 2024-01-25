import { dirname, join} from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const childPath = join(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
  const cp = spawn('node', [childPath, ...args]);

  process.stdin.pipe(cp.stdin);
  cp.stdout.pipe(process.stdout);
};

spawnChildProcess([ 'RSS_', 2024]);
