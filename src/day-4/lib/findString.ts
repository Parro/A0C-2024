import * as directions from './index';

const findString: (args: {
  stringToSearch: string;
  matrix: Array<Array<string>>;
  start: Array<number>;
  direction: string;
}) => boolean = ({ stringToSearch, matrix, start, direction = 'North' }) => {
  let found = false;
  if (matrix[start[0]][start[1]] === stringToSearch[0]) {
    // console.log('🚀 ~ direction:', direction);
    // console.log('🚀 ~ start:', start);
    let point = start;

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
      // console.log('🚀 ~ value:', value);
      // // console.log('🚀 ~ newPoint:', newPoint);
      if (stringToSearch[i] !== value) {
        found = false;
        break;
      }
      point = [newPoint[1], newPoint[0]];
    }

    // console.log('🚀 ~ found:', found);
    return found;
  }
  // console.log('🚀 ~ found:', found);
  return found;
};

export default findString;
