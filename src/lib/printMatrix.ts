import type { PrintMatrix } from './types';

const printMatrix: PrintMatrix = ({ width, height, points }) => {
  let draw = '';
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const pointFound = points.some((point) => point[0] === x && point[1] === y)
      if (pointFound) {
        draw += 'x';
      } else {
        draw += '.';
      }
    }
    draw += '\n';
  }

  return draw;
};
export default printMatrix;
