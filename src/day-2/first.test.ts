import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import { main } from './first';

describe('Day 2 first exercise tests', () => {
  it('should test day 2 first exercise', () => {
    const input = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9
1 1 6 7 9`;

    const expectedOutput = 2;

    const output = main(input);

    assert.strictEqual(output, expectedOutput);
  });
});
