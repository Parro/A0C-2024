import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import printMatrix from './printMatrix';

describe('printMatrix test', () => {
  it('should print a matrix with the marked position filled with x and the empty with a .', () => {
    const input = {
      width: 3,
      height: 3,
      points: [
        [0, 1],
        [1, 1],
        [2, 2],
      ],
    };

    const expectedOutput = `...
xx.
..x
`;

    const output = printMatrix(input);
    console.log('🚀 ~ output:', output);

    assert.deepEqual(output, expectedOutput);
  });
});
