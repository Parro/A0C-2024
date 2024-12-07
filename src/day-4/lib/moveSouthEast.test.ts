import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import moveSouthEast from './moveSouthEast';

describe('moveSouthEast test', () => {
  it('should get the value of the point at the south east of the input coordinates', () => {
    const input = {
      matrix: [
        ['A', 'B', 'C'],
        ['D', 'E', 'F'],
        ['G', 'H', 'I'],
      ],
      point: [1, 1],
    };

    const expectedOutput = { value: 'G', newPoint: [0, 2] };

    const output = moveSouthEast(input);

    assert.deepEqual(output, expectedOutput);
  });
  
  it('should return null if there south east point is outside the matrix (south)', () => {
    const input = {
      matrix: [
        ['A', 'B', 'C'],
        ['D', 'E', 'F'],
        ['G', 'H', 'I'],
      ],
      point: [0, 2],
    };

    const expectedOutput = null;

    const output = moveSouthEast(input);

    assert.strictEqual(output, expectedOutput);
  });
  
  it('should return null if there south east point is outside the matrix (east)', () => {
    const input = {
      matrix: [
        ['A', 'B', 'C'],
        ['D', 'E', 'F'],
        ['G', 'H', 'I'],
      ],
      point: [0, 1],
    };

    const expectedOutput = null;

    const output = moveSouthEast(input);

    assert.strictEqual(output, expectedOutput);
  });
});
