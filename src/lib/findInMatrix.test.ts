import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import findInMatrix from './findInMatrix';

describe('findInMatrix test', () => {
  it('should get the coordinates of a character found in a matrix', () => {
    const input = {
      matrix: [
        ['A', 'B', 'C'],
        ['D', 'E', 'F'],
        ['G', 'H', 'I'],
      ],
      character: 'E',
    };

    const expectedOutput = [1, 1];

    const output = findInMatrix(input);
    console.log('🚀 ~ output:', output);

    assert.deepEqual(output, expectedOutput);
  });
  it('should return an empty array if the character is not found in the matrix', () => {
    const input = {
      matrix: [
        ['A', 'B', 'C'],
        ['D', 'E', 'F'],
        ['G', 'H', 'I'],
      ],
      character: 'Z',
    };

    const expectedOutput: Array<number> = [];

    const output = findInMatrix(input);
    console.log('🚀 ~ output:', output);

    assert.deepEqual(output, expectedOutput);
  });
});
