const main: (input: string) => number = (input) => {
  const search = new RegExp(/mul\([0-9]*,[0-9]*\)|do\(\)|don't\(\)/, 'g');

  const matches = input.matchAll(search);
  let total = 0;
  let doMultiply = true;

  for (const match of matches) {
    // console.log('🚀 ~ match: ', match[0]);

    if (match[0].includes('do()')) {
      doMultiply = true;
    }
    if (match[0].includes("don't()")) {
      doMultiply = false;
    }

    if (doMultiply === true && match[0].includes('mul')) {
      const numbersSearch = match[0].match(
        /(?<firstNumber>[0-9]*),(?<secondNumber>[0-9]*)/
      );
      // console.log('🚀 ~ numbersSearch:', numbersSearch);
      const firstNumber = Number(numbersSearch?.groups?.firstNumber);
      const secondNumber = Number(numbersSearch?.groups?.secondNumber);

      total += firstNumber * secondNumber;
    }
  }

  return total;
};

export { main };
