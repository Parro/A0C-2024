import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import moveSouth from './moveSouth';

describe('moveSouth test', () => {
  it('should get the value of the point at the South of the input coordinates', () => {
    const input = {
      matrix: [
        ['A', 'B', 'C'],
        ['D', 'E', 'F'],
        ['G', 'H', 'I'],
      ],
      point: [1, 1],
    };

    const expectedOutput = { value: 'H', newPoint: [1, 2] };

    const output = moveSouth(input);

    assert.deepEqual(output, expectedOutput);
  });
  
  it('should return null if there South point is outside the matrix', () => {
    const input = {
      matrix: [
        ['A', 'B', 'C'],
        ['D', 'E', 'F'],
        ['G', 'H', 'I'],
      ],
      point: [0, 2],
    };

    const expectedOutput = null;

    const output = moveSouth(input);

    assert.strictEqual(output, expectedOutput);
  });
});
