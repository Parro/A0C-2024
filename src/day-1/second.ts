import getColumns from './getColumns';

type Main = (input: string) => number;

const main: Main = (input) => {
  const rows = input.split('\n');
  // console.log('🚀 ~ rows:', rows);

  const columns = getColumns(rows);

  // console.log('🚀 ~ columns:', columns);

  const secondColumnsCount: { [key: number]: number } = {};

  const { first, second } = columns;

  return first.reduce((acc, number) => {
    if (secondColumnsCount[number] === undefined) {
      const count = second.reduce((acc, secondNumber) => {
        if (secondNumber === number) {
          acc = acc + 1;
        }
        return acc;
      }, 0);

      secondColumnsCount[number] = count;
    }
    // console.log('🚀 ~ secondColumnsCount:', secondColumnsCount);

    acc += number * secondColumnsCount[number];

    return acc;
  }, 0);
};

export { main };
