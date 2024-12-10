const main: (input: string) => number = (input) => {
  const [positions, pagesList] = input.split('\n\n');
  // console.log('🚀 ~ positions:', positions);

  const positionsPagesAll = positions
    .split('\n')
    .reduce<Array<string>>((acc, line) => {
      return [...acc, ...line.split('|')];
    }, []);
  // console.log('🚀 ~ positionsPagesAll:', positionsPagesAll);

  const positionsPages = positionsPagesAll
    .filter((positionPage, index) => {
      return positionsPagesAll.indexOf(positionPage) === index;
    })
    .map((pos) => Number(pos));
  // console.log('🚀 ~ positionsPages:', positionsPages);

  // const fakePositionPages = ['47','53','75','61','29','97'];
  const pageOrder = positionsPages.sort((a, b) => {
    const pageComparison = positions.split('\n').filter((position) => {
      const comparison = position.split('|');
      return (
        (Number(comparison[0]) === a && Number(comparison[1]) === b) ||
        (Number(comparison[1]) === a && Number(comparison[0]) === b)
      );
    });

    const order = pageComparison[0].split('|');

    if (Number(order[0]) === a) {
      return -1;
    } else {
      return 1;
    }
  });

  console.log('🚀 ~ pageOrder:', pageOrder);

  const pageRows = pagesList.split('\n');

  return pageRows.reduce((acc, row) => {
    // console.log('🚀 ~ row:', row);

    const pages = row.split(',').map((pag) => Number(pag));
    const correct = pages.every((page, index) => {
      return (
        index === pages.length - 1 ||
        pageOrder.indexOf(page) < pageOrder.indexOf(pages[index + 1])
      );
    });
    console.log('🚀 ~ correct:', correct);
    if (correct) {
      console.log('🚀 ~ pages.length:', pages.length);
      const middleNumber = Math.floor(pages.length / 2);
      const middlePage = pages[middleNumber];
      acc += middlePage;
    }
    return acc;
  }, 0);
};

export { main };
