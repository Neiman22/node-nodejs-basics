import { Worker } from 'worker_threads';
import { dirname, join} from 'path';
import { fileURLToPath } from 'url';
import { availableParallelism } from 'os';

const __dirname = dirname(fileURLToPath(import.meta.url));
const workerPath = join(__dirname, 'worker.js');
const numberCPU = availableParallelism();

const performCalculations = async () => {
  const workers = Array.from({ length: numberCPU }, (_, i) => {
    const worker = new Worker(workerPath, { workerData: i + 10});
    return new Promise((res) => worker.on('message', (msg) => res(msg)));
  });
  const result = await Promise.all(workers);
  console.log(result);
};

await performCalculations();