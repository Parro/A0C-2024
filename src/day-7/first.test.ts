import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import { main } from './first';

describe('Day 7 first exercise tests', () => {
  it('should test day 7 first exercise', () => {
    const input = `190: 10 19
3267: 81 40 27
83: 17 5
156: 15 6
7290: 6 8 6 15
161011: 16 10 13
192: 17 8 14
21037: 9 7 18 13
292: 11 6 16 20`;

    const expectedOutput = 3749;

    const output = main(input);

    assert.strictEqual(output, expectedOutput);
  });
});
