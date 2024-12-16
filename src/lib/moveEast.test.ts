import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import moveEast from './moveEast';

describe('moveEast test', () => {
  it('should get the value of the point at the east of the input coordinates', () => {
    const input = {
      matrix: [
        ['A', 'B', 'C'],
        ['D', 'E', 'F'],
        ['G', 'H', 'I'],
      ],
      point: [1, 1],
    };

    const expectedOutput = { value: 'D', newPoint: [0,1] };

    const output = moveEast(input);

    assert.deepEqual(output, expectedOutput);
  });
  
  it('should return null if there east point is outside the matrix', () => {
    const input = {
      matrix: [
        ['A', 'B', 'C'],
        ['D', 'E', 'F'],
        ['G', 'H', 'I'],
      ],
      point: [0, 1],
    };

    const expectedOutput = null;

    const output = moveEast(input);

    assert.strictEqual(output, expectedOutput);
  });
});
