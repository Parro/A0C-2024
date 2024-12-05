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
      if (Number(rowNumbers[0]) > Number(rowNumbers[2])) {
        return 'down';
      }
      if (Number(rowNumbers[0]) < Number(rowNumbers[2])) {
        return 'up';
      }
      // console.log('🚀 ~ row:', row);
      return 'eq';
    }
  });

  // console.log('🚀 ~ directions:', directions);
  return rows.reduce((acc, row, index) => {
    const rowNumbers = row.split(' ');

    
    let aboveThree = false;
    for (let i = 0; i < rowNumbers.length - 1; i++) {
      if (Math.abs(Number(rowNumbers[i]) - Number(rowNumbers[i + 1])) > 3) {
        if (Math.abs(Number(rowNumbers[i]) - Number(rowNumbers[i + 2])) > 3) {
          aboveThree = true;
          break;
        }
      }
    }
    if (aboveThree) {
      return acc;
    }

    let wrongDirection = false;
    if (directions[index] === 'up') {
      if (index === 0) {
        console.log('🚀 ~ rowNumbers:', rowNumbers);
      }
      for (let i = 0; i < rowNumbers.length - 1; i++) {
        if (Number(rowNumbers[i]) > Number(rowNumbers[i + 1])) {
          if (Number(rowNumbers[i]) > Number(rowNumbers[i + 2])) {
            wrongDirection = true;
            break;
          }
        }
      }
    } else if (directions[index] === 'down') {
      if (index === 0) {
        console.log('🚀 ~ rowNumbers:', rowNumbers);
      }
      for (let i = 0; i < rowNumbers.length - 1; i++) {
        if (Number(rowNumbers[i]) < Number(rowNumbers[i + 1])) {
          if (Number(rowNumbers[i]) < Number(rowNumbers[i + 2])) {
            wrongDirection = true;
            break;
          }
        }
      }
    } else {
      wrongDirection = true;
    }
    if (wrongDirection) {
      return acc;
    }

    console.log('🚀 ~ row:', index, row);
    //   if (directions[index] === 'eq') {
    //     return acc;
    //   }

    //   if (directions[index] === 'up') {
    //     // console.log('🚀 ~ rowNumbers up:', rowNumbers);
    //     if (
    //       !rowNumbers.every((number, index) => {
    //         // console.log('🚀 ~ Number(number):', Number(number));
    //         // console.log(
    //         //   '🚀 ~ Number(number[index + 1]):',
    //         //   Number(rowNumbers[index + 1])
    //         // );

    //         return (
    //           (index < rowNumbers.length &&
    //             Number(number) < Number(rowNumbers[index + 1])) ||
    //           index === rowNumbers.length - 1
    //         );
    //       })
    //     ) {
    //       return acc;
    //     }
    //   }

    //   if (directions[index] === 'down') {
    //     // console.log('🚀 ~ rowNumbers down:', rowNumbers);
    //     if (
    //       !rowNumbers.every(
    //         (number, index) =>
    //           (index < rowNumbers.length &&
    //             Number(number) > Number(rowNumbers[index + 1])) ||
    //           index === rowNumbers.length - 1
    //       )
    //     ) {
    //       return acc;
    //     }
    //   }
    acc++;
    return acc;
  }, 0);
  // const rows = input.split('\n');
  // // console.log('🚀 ~ rows:', rows);

  // // console.log('🚀 ~ directions:', directions);
  // const scores = rows.map((row) => {
  //   const rowNumbers = row.split(' ');

  //   console.log('🚀 ~ rowNumbers :', rowNumbers);

  //   let direction = '';
  //   if (Number(rowNumbers[0]) > Number(rowNumbers[1])) {
  //     direction = 'down';
  //   }
  //   if (Number(rowNumbers[0]) < Number(rowNumbers[1])) {
  //     direction = 'up';
  //   }
  //   if (Number(rowNumbers[0]) === Number(rowNumbers[1])) {
  //     direction = 'eq';
  //   }
  //   const rowSteps = rowNumbers.length - 1;

  //   const score = rowNumbers.reduce(
  //     (acc, number, index) => {
  //       if (index === rowNumbers.length - 1) {
  //         return acc;
  //       }
  //       const currentNumber = Number(number);
  //       const nextNumber = Number(rowNumbers[index + 1]);
  //       if (
  //         index < rowNumbers.length &&
  //         Math.abs(currentNumber - nextNumber) > 3
  //       ) {
  //         acc.aboveThree++;
  //       }

  //       if (currentNumber < nextNumber) {
  //         acc.incremental++;
  //       } else if (currentNumber > nextNumber) {
  //         acc.decremental++;
  //       } else {
  //         acc.equals++;
  //       }
  //       return acc;
  //     },
  //     {
  //       aboveThree: 0,
  //       equals: 0,
  //       incremental: 0,
  //       decremental: 0,
  //       direction,
  //       rowSteps,
  //     }
  //   );
  //   console.log('🚀 ~ score:', score);
  //   return score;
  // });

  // return scores.reduce((acc, score) => {
  //   let errors = 0;
  //   errors += score.aboveThree;
  //   errors += score.equals;

  //   if (score.direction === 'down') {
  //     errors += score.rowSteps - score.decremental;
  //   }
  //   if (score.direction === 'up') {
  //     errors += score.rowSteps - score.incremental;
  //   }
  //   if (errors <= 1) {
  //     acc++;
  //   }
  //   console.log('🚀 ~ errors:', errors);
  //   return acc;
  // }, 0);
};

export { main };
