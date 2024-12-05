import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import { main } from './second';

describe('Day 3 second exercise tests', () => {
  it('should test day 3 second exercise', () => {
    const input =
      "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))";

    const expectedOutput = 48;

    const output = main(input);

    assert.strictEqual(output, expectedOutput);
  });
});
