import getPossiblePermutations from '../lib/getPossiblePermutations';

const main: (input: string) => number = (input) => {
  const operators = ['*', '+'];
  const rows = input.split('\n');
  // console.log('🚀 ~ rows:', rows);

  return rows.reduce((accTotal, row) => {
    // console.log('🚀 ~ rowIndex:', rowIndex);
    const [result, factors] = row.split(': ');
    const factorNumbers = factors.split(' ').map((el) => Number(el));

    let isValid = false;
    // console.log('🚀 ~ result:', result);
    // // console.log('🚀 ~ factorNumbers:', factorNumbers);

    const possibleOperators = getPossiblePermutations({
      values: operators,
      positions: factorNumbers.length - 1,
    });

    // console.log('🚀 ~ possibleOperators:', possibleOperators);
    for (
      let operatorsIndex = 0;
      operatorsIndex < possibleOperators.length;
      operatorsIndex++
    ) {
      const currentResult = factorNumbers.reduce((acc, curr, index) => {
        if (index === 0) {
          acc = curr;
        }
        // console.log('🚀 ~ curr:', curr);
        // console.log(
        // '🚀 ~ possibleOperators[operatorsIndex][index]:',
        // possibleOperators[operatorsIndex][index]
        // );
        if (possibleOperators[operatorsIndex][index] === '+') {
          acc = acc + factorNumbers[index + 1];
        }
        if (possibleOperators[operatorsIndex][index] === '*') {
          acc = acc * factorNumbers[index + 1];
        }
        // console.log('🚀 ~ acc:', acc);
        return acc;
      }, 0);
      // console.log('🚀 ~ currentResult:', currentResult);
      if (currentResult === Number(result)) {
        isValid = true;
        break;
      }
    }
    if (isValid === true) {
      accTotal += Number(result);
    }
    // console.log('🚀 ~ accTotal:', accTotal);
    return accTotal;
  }, 0);
};

export { main };
