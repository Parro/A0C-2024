const getColumns: (rows: Array<string>) => {first: Array<number>,second: Array<number>} = (rows) => {
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

  return columns;
};

export default getColumns;
