const findInMatrix: (args: {
  matrix: Array<Array<string>>;
  character: string;
}) => Array<number> = ({ matrix, character }) => {
  return matrix.reduce((acc, row, rowIndex) => {
    const columnPos = row.indexOf(character);

    if (columnPos > -1) {
      acc.push(Number(rowIndex));
      acc.push(columnPos);
    }
    return acc;
  }, [] as Array<number>);
};

export default findInMatrix;
