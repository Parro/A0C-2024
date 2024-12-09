import findString from './lib/findString';

const directions = [
  'North',
  'NorthWest',
  'West',
  'SouthWest',
  'South',
  'SouthEast',
  'East',
  'NorthEast',
];
const main: (input: string) => number = (input) => {
  const matrix = input.split('\n').map((row) => row.split(''));
  // console.log('🚀 ~ matrix: ', matrix);
  return matrix.reduce((accRow, row, rowIndex) => {
    accRow += row.reduce((accColumn, char, charIndex) => {
      // // console.log('🚀 ~ [charIndex, rowIndex]: ', [charIndex, rowIndex]);
      // // console.log(
      // //   '🚀 ~ matrix[rowIndex, charIndex]: ',
      // //   matrix[rowIndex][charIndex]
      // // );
      directions.forEach((direction) => {
        if (
          findString({
            stringToSearch: 'XMAS',
            charToSearch: 'A',
            matrix,
            start: [rowIndex, charIndex],
            direction,
          }) !== null
        ) {
          // console.log('🚀 ~ increase ');
          accColumn++;
        }
      });

      return accColumn;
    }, 0);
    return accRow;
  }, 0);
};

export { main };
