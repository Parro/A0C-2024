type Main = (input: string) => number;

const main: Main = (input) => {
  const rows = input.split('\n');
  console.log('🚀 ~ rows:', rows);

  const columns = rows.reduce<{ first: Array<number>; second: Array<number> }>(
    (acc, row) => {
      const columns = row.split('   ');

      acc.first.push(Number(columns[0]));
      acc.second.push(Number(columns[1]));

      return acc;
    },
    { first: [], second: [] }
  );

  columns.first.sort();
  columns.second.sort();

  console.log('🚀 ~ columns:', columns);

  const distances = columns.first.reduce((acc, firstElement, index) => {
    acc = acc + Math.abs(firstElement - columns.second[index]);
    return acc;
  }, 0);

  return distances;
};

export { main };
