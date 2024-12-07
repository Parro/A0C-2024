import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import { main } from './first';

describe('Day 4 first exercise tests', () => {
  it('should test day 4 first exercise', () => {
    const input = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`;

    const expectedOutput = 18;

    const output = main(input);

    assert.strictEqual(output, expectedOutput);
  });
});
