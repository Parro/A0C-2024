import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import moveWest from './moveWest';

describe('moveWest test', () => {
  it('should get the value of the point at the west of the input coordinates', () => {
    const input = {
      matrix: [
        ['A', 'B', 'C'],
        ['D', 'E', 'F'],
        ['G', 'H', 'I'],
      ],
      point: [1, 1],
    };

    const expectedOutput = { value: 'F', newPoint: [2, 1] };

    const output = moveWest(input);

    assert.deepEqual(output, expectedOutput);
  });
  
  it('should return null if there west point is outside the matrix', () => {
    const input = {
      matrix: [
        ['A', 'B', 'C'],
        ['D', 'E', 'F'],
        ['G', 'H', 'I'],
      ],
      point: [2, 0],
    };

    const expectedOutput = null;

    const output = moveWest(input);

    assert.strictEqual(output, expectedOutput);
  });
});
