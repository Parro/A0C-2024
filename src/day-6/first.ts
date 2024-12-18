import printMatrix from '../lib/printMatrix';
import findInMatrix from '../lib/findInMatrix';
import * as moveDirections from '../lib/index';

const directions = ['North', 'West', 'South', 'East'];

const main: (input: string) => number = (input) => {
  const matrix = input.split('\n').map((row) => row.split(''));
  // console.log('🚀 ~ matrix:', matrix);

  const startUp = findInMatrix({ matrix, character: '^' });
  const startDown = findInMatrix({ matrix, character: '^' });
  const startLeft = findInMatrix({ matrix, character: '<' });
  const startRight = findInMatrix({ matrix, character: '>' });

  let start: Array<number> = [];
  let direction = '';

  if (startUp.length > 0) {
    start = startUp;
    direction = 'North';
  } else if (startDown.length > 0) {
    start = startDown;
    direction = 'South';
  } else if (startLeft.length > 0) {
    start = startLeft;
    direction = 'West';
  } else if (startRight.length > 0) {
    start = startRight;
    direction = 'East';
  }
  let moving = true;

  let point = [start[1], start[0]];

  const steps: Array<string> = [];

  console.log('🚀 ~ start:', point);
  console.log('🚀 ~ direction:', direction);

  while (moving === true) {
    const moveDirection = `move${direction}` as keyof typeof moveDirections;

    const directionFn = moveDirections[moveDirection] as (args: {
      matrix: Array<Array<string>>;
      point: Array<number>;
    }) => { value: string; newPoint: Array<number> } | null;
    const nextPoint = directionFn({ matrix, point });
    // console.log('🚀 ~ nextPoint: ', nextPoint);
    if (nextPoint === null) {
      moving = false;
    } else {
      if (nextPoint.value === '#') {
        const curDirIndex = directions.indexOf(direction);
        direction =
          directions[curDirIndex + 1] !== undefined
            ? directions[curDirIndex + 1]
            : directions[0];
        // console.log('🚀 ~ steps: ', steps);
      } else {
        point = nextPoint.newPoint;
        steps.push(`${nextPoint.newPoint[0]}_${nextPoint.newPoint[1]}`);
      }
    }
  }
  const uniqueSteps = steps.filter((step, index) => {
    return steps.indexOf(step) === index;
  });
  // console.log('🚀 ~ uniqueSteps:', uniqueSteps);

  const map = printMatrix({
    width: 130,
    height: 130,
    points: uniqueSteps.map((el) => el.split('_').map(num=>Number(num))),
  });
  console.log('🚀 ~ map:', map);

  return uniqueSteps.length;
};

export { main };
