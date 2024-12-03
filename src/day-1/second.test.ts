import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import { main } from './second';

describe('Day 1 second exercise tests', () => {
  it('should test day 1 second exercise', () => {
    const input = `3   4
4   3
2   5
1   3
3   9
3   3`;

    const expectedOutput = 31;

    const output = main(input);

    assert.strictEqual(output, expectedOutput);
  });
});
