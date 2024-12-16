import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import moveNorthEast from './moveNorthEast';

describe('moveNorthEast test', () => {
  it('should get the value of the point at the north east of the input coordinates', () => {
    const input = {
      matrix: [
        ['A', 'B', 'C'],
        ['D', 'E', 'F'],
        ['G', 'H', 'I'],
      ],
      point: [1, 1],
    };

    const expectedOutput = { value: 'A', newPoint: [0, 0] };

    const output = moveNorthEast(input);

    assert.deepEqual(output, expectedOutput);
  });
  
  it('should return null if there north east point is outside the matrix (north)', () => {
    const input = {
      matrix: [
        ['A', 'B', 'C'],
        ['D', 'E', 'F'],
        ['G', 'H', 'I'],
      ],
      point: [1, 0],
    };

    const expectedOutput = null;

    const output = moveNorthEast(input);

    assert.strictEqual(output, expectedOutput);
  });
  
  it('should return null if there north east point is outside the matrix (east)', () => {
    const input = {
      matrix: [
        ['A', 'B', 'C'],
        ['D', 'E', 'F'],
        ['G', 'H', 'I'],
      ],
      point: [1, 0],
    };

    const expectedOutput = null;

    const output = moveNorthEast(input);

    assert.strictEqual(output, expectedOutput);
  });
});
