const main: (input: string) => number = (input) => {
  const search = new RegExp(/mul\([0-9]*,[0-9]*\)/, 'g');

  const matches = input.matchAll(search);
  let total = 0;
  for (const match of matches) {
    // console.log('🚀 ~ match: ', match[0]);
    const numbersSearch = match[0].match(
      /(?<firstNumber>[0-9]*),(?<secondNumber>[0-9]*)/
    );
    // console.log('🚀 ~ numbersSearch:', numbersSearch);
    const firstNumber = Number(numbersSearch?.groups?.firstNumber);
    const secondNumber = Number(numbersSearch?.groups?.secondNumber);

    total += firstNumber * secondNumber;
  }

  return total;
};

export { main };
