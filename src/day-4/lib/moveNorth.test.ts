import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import moveNorth from './moveNorth';

describe('moveNorth test', () => {
  it('should get the value of the point at the north of the input coordinates', () => {
    const input = {
      matrix: [
        ['A', 'B', 'C'],
        ['D', 'E', 'F'],
        ['G', 'H', 'I'],
      ],
      point: [1, 1],
    };

    const expectedOutput = { value: 'B', newPoint: [1, 0] };

    const output = moveNorth(input);

    assert.deepEqual(output, expectedOutput);
  });

  it('should return null if there north point is outside the matrix', () => {
    const input = {
      matrix: [
        ['A', 'B', 'C'],
        ['D', 'E', 'F'],
        ['G', 'H', 'I'],
      ],
      point: [1, 0],
    };

    const expectedOutput = null;

    const output = moveNorth(input);

    assert.strictEqual(output, expectedOutput);
  });
});
