import getColumns from './getColumns';

type Main = (input: string) => number;

const main: Main = (input) => {
  const rows = input.split('\n');
  console.log('🚀 ~ rows:', rows);

  const columns = getColumns(rows);

  console.log('🚀 ~ columns:', columns);

  const distances = columns.first.reduce((acc, firstElement, index) => {
    acc = acc + Math.abs(firstElement - columns.second[index]);
    return acc;
  }, 0);

  return distances;
};

export { main };
