import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import { main } from './second';

describe('Day 2 second exercise tests', () => {
  it('should test day 2 second exercise', () => {
    const input = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

    const expectedOutput = 4;

    const output = main(input);

    assert.strictEqual(output, expectedOutput);
  });
});
