import * as directions from './index';

const findString: (args: {
  stringToSearch: string;
  charToSearch: string;
  matrix: Array<Array<string>>;
  start: Array<number>;
  direction: string;
}) => string | null = ({
  stringToSearch,
  charToSearch,
  matrix,
  start,
  direction,
}) => {
  let found = false;
  if (matrix[start[0]][start[1]] !== stringToSearch[0]) {
    return null;
  }
  // console.log('🚀 ~ direction:', direction);
  // console.log('🚀 ~ start:', start);
  let point = start;
  let charToSearchPoint = '';
  for (let i = 1; i < stringToSearch.length; i++) {
    found = true;
    const moveDirection = `move${direction}` as keyof typeof directions;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const directionFn = directions[moveDirection] as any;
    const next = directionFn({ matrix, point: [point[1], point[0]] });
    if (next === null) {
      found = false;
      break;
    }
    const { value, newPoint } = next;
    if (value === charToSearch) {
      charToSearchPoint = `${newPoint[0]},${newPoint[1]}`;
    }
    // console.log('🚀 ~ value:', value);
    // // console.log('🚀 ~ newPoint:', newPoint);
    if (stringToSearch[i] !== value) {
      found = false;
      break;
    }
    point = [newPoint[1], newPoint[0]];
  }
  if (found === false) {
    return null;
  }
  // console.log('🚀 ~ found:', found);
  return charToSearchPoint;
};

export default findString;
