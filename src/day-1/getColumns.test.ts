import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import getColumns from './getColumns';

describe('Day 1 first exercise tests', () => {
  it('should test day 1 first exercise', () => {
    const input = ['3   4', '4   3', '4   3', '2   5'];

    const expectedOutput = { first: [2, 3, 4, 4], second: [3, 3, 4, 5] };

    const output = getColumns(input);

    assert.deepEqual(output, expectedOutput);
  });
});
