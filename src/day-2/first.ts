const main: (input: string) => number = (input) => {
  const rows = input.split('\n');
  // console.log('🚀 ~ rows:', rows);

  const directions = rows.map((row) => {
    const rowNumbers = row.split(' ');
    // console.log('🚀 ~ row:', row);

    if (Number(rowNumbers[0]) > Number(rowNumbers[1])) {
      return 'down';
    }
    if (Number(rowNumbers[0]) < Number(rowNumbers[1])) {
      return 'up';
    }
    if (Number(rowNumbers[0]) === Number(rowNumbers[1])) {
      return 'eq';
    }
  });

  // console.log('🚀 ~ directions:', directions);
  return rows.reduce((acc, row, index) => {
    const rowNumbers = row.split(' ');

    if (
      rowNumbers.some(
        (number, index) =>
          Math.abs(Number(number) - Number(rowNumbers[index + 1])) > 3
      )
    ) {
      return acc;
    }

    if (directions[index] === 'eq') {
      return acc;
    }

    if (directions[index] === 'up') {
      // console.log('🚀 ~ rowNumbers up:', rowNumbers);
      if (
        !rowNumbers.every((number, index) => {
          // console.log('🚀 ~ Number(number):', Number(number));
          // console.log(
          //   '🚀 ~ Number(number[index + 1]):',
          //   Number(rowNumbers[index + 1])
          // );

          return (
            (index < rowNumbers.length &&
              Number(number) < Number(rowNumbers[index + 1])) ||
            index === rowNumbers.length - 1
          );
        })
      ) {
        return acc;
      }
    }

    if (directions[index] === 'down') {
      // console.log('🚀 ~ rowNumbers down:', rowNumbers);
      if (
        !rowNumbers.every(
          (number, index) =>
            (index < rowNumbers.length &&
              Number(number) > Number(rowNumbers[index + 1])) ||
            index === rowNumbers.length - 1
        )
      ) {
        return acc;
      }
    }
    acc++;
    return acc;
  }, 0);
};

export { main };
