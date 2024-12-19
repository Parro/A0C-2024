import { GetPossiblePermutations } from './types';

const getPossiblePermutations: GetPossiblePermutations = function ({
  values,
  positions,
}) {
  const holdingArr: Array<Array<string>> = [];


  const recursiveABC = function (singleSolution:Array<string>) {
    if (singleSolution.length > positions - 1) {
      holdingArr.push(singleSolution);
      return;
    }
    for (let i = 0; i < values.length; i++) {
      recursiveABC(singleSolution.concat([values[i]]));
    }
  };
  recursiveABC([]);
  return holdingArr;
};

export default getPossiblePermutations;
