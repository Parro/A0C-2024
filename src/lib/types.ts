export type GetPossiblePermutations = (args: {
  values: Array<string>;
  positions: number;
}) => Array<Array<string>>;

export type PrintMatrix = (args: {
  width: number;
  height: number;
  points: Array<Array<number>>;
}) => string;
