import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import moveSouthWest from './moveSouthWest';

describe('moveSouthWest test', () => {
  it('should get the value of the point at the south west of the input coordinates', () => {
    const input = {
      matrix: [
        ['A', 'B', 'C'],
        ['D', 'E', 'F'],
        ['G', 'H', 'I'],
      ],
      point: [1, 1],
    };

    const expectedOutput = { value: 'I', newPoint: [2, 2] };

    const output = moveSouthWest(input);

    assert.deepEqual(output, expectedOutput);
  });
  
  it('should return null if there south west point is outside the matrix (south)', () => {
    const input = {
      matrix: [
        ['A', 'B', 'C'],
        ['D', 'E', 'F'],
        ['G', 'H', 'I'],
      ],
      point: [1, 2],
    };

    const expectedOutput = null;

    const output = moveSouthWest(input);

    assert.strictEqual(output, expectedOutput);
  });

  it('should return null if there south west point is outside the matrix (west))', () => {
    const input = {
      matrix: [
        ['A', 'B', 'C'],
        ['D', 'E', 'F'],
        ['G', 'H', 'I'],
      ],
      point: [2, 0],
    };

    const expectedOutput = null;

    const output = moveSouthWest(input);

    assert.strictEqual(output, expectedOutput);
  });
});
