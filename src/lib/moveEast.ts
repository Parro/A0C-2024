const moveEast: (args: {
  matrix: Array<Array<string>>;
  point: Array<number>;
}) => { value: string; newPoint: Array<number> } | null = ({
  matrix,
  point,
}) => {
  if (matrix[point[1]][point[0] - 1] === undefined) {
    return null;
  }

  const newPoint = [point[0] - 1, point[1]];

  return {
    value: matrix[newPoint[1]][newPoint[0]],
    newPoint,
  };
};

export default moveEast;
