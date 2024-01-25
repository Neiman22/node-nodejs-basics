import process from 'process';

const parseArgs = () => {
  const arqvs = process.argv.slice(2);
  const pairs = [];
  for (let i = 0; i < arqvs.length / 2; i++) {
    pairs.push(`${arqvs[2 * i].slice(2)} is ${arqvs[2 * i + 1]}`);
  };
  console.log(pairs.join(', '));
};

parseArgs();