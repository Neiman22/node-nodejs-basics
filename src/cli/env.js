import process from 'process';

const parseEnv = () => {
  const arrayEnv = Object.entries(process.env);
  const filterKeys = arrayEnv.filter((item) => item[0].startsWith('RSS_'));
  const formatedKeys = filterKeys.map((item) => `${item[0]}=${item[1]}`).join('; ');
  console.log(formatedKeys);
};

parseEnv();