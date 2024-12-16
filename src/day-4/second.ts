import findString from '../lib/findString';

const directions = [
  // 'North',
  'NorthWest',
  // 'West',
  'SouthWest',
  // 'South',
  'SouthEast',
  // 'East',
  'NorthEast',
];
const main: (input: string) => number = (input) => {
  const matrix = input.split('\n').map((row) => row.split(''));
  // // console.log('🚀 ~ matrix: ', matrix);
  const crossCharFound = matrix.reduce<string[]>((accRow, row, rowIndex) => {
    const charFoundColumn = row.reduce<string[]>(
      (accColumn, char, charIndex) => {
        // // // console.log('🚀 ~ [charIndex, rowIndex]: ', [charIndex, rowIndex]);
        // // // console.log(
        // // //   '🚀 ~ matrix[rowIndex, charIndex]: ',
        // // //   matrix[rowIndex][charIndex]
        // // // );
        directions.forEach((direction) => {
          const charFound = findString({
            stringToSearch: 'MAS',
            charToSearch: 'A',
            matrix,
            start: [rowIndex, charIndex],
            direction,
          });
          if (charFound !== null) {
            // // console.log('🚀 ~ increase ');
            accColumn.push(charFound);
          }
        });

        return accColumn;
      },
      []
    );

    // console.log('🚀 ~ charFoundColumn: ', charFoundColumn);
    return [...accRow, ...charFoundColumn];
  }, []);
  // console.log('🚀 ~ crossCharFound: ', crossCharFound);

  const doubleChar = crossCharFound.filter(
    (char, index) => crossCharFound.indexOf(char) !== index
  );
  // console.log('🚀 ~ doubleChar:', doubleChar);

  return doubleChar.length;
};

export { main };
