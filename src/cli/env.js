import process from 'process';

const parseEnv = () => {
  const formatedKeys = Object.entries(process.env)
    .filter(([key]) => key.startsWith('RSS_'))
    .map(([key, value]) => `${key}=${value}`)
    .join('; ');

  console.log(formatedKeys);
};

parseEnv();