import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import moveNorthWest from './moveNorthWest';

describe('moveNorthWest test', () => {
  it('should get the value of the point at the north west of the input coordinates', () => {
    const input = {
      matrix: [
        ['A', 'B', 'C'],
        ['D', 'E', 'F'],
        ['G', 'H', 'I'],
      ],
      point: [1, 1],
    };

    const expectedOutput = { value: 'C', newPoint: [2, 0] };

    const output = moveNorthWest(input);

    assert.deepEqual(output, expectedOutput);
  });
  
  it('should return null if there north west point is outside the matrix (north)' , () => {
    const input = {
      matrix: [
        ['A', 'B', 'C'],
        ['D', 'E', 'F'],
        ['G', 'H', 'I'],
      ],
      point: [1, 0],
    };

    const expectedOutput = null;

    const output = moveNorthWest(input);

    assert.strictEqual(output, expectedOutput);
  });

  it('should return null if there north west point is outside the matrix (west)' , () => {
    const input = {
      matrix: [
        ['A', 'B', 'C'],
        ['D', 'E', 'F'],
        ['G', 'H', 'I'],
      ],
      point: [2, 2],
    };

    const expectedOutput = null;

    const output = moveNorthWest(input);

    assert.strictEqual(output, expectedOutput);
  });
});
