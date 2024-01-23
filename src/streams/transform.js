import { stdin, stdout } from 'process';
import { Transform } from 'stream';

const transform = async () => {  
  const myTransform = new Transform({
    transform(chunk, _, callback) {
      this.push(chunk.toString().split("").reverse().join("") + "\n");
      callback();
    } 
  });

  stdin.pipe(myTransform).pipe(stdout);
};

await transform();