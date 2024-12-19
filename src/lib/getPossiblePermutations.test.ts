import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import getPossiblePermutations from './getPossiblePermutations';

describe('getPossiblePermutations test', () => {
  it('should get the possible permutations of a list of values in N positions', () => {
    const input = {
      values: ['+', '*'],
      positions: 2,
    };

    const expectedOutput = [
      ['+', '+'],
      ['+', '*'],
      ['*', '+'],
      ['*', '*'],
    ];

    const output = getPossiblePermutations(input);
    console.log('🚀 ~ output:', output);

    assert.deepEqual(output, expectedOutput);
  });
});
