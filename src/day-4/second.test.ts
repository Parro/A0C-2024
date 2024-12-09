import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import { main } from './second';

describe('Day 4 second exercise tests', () => {
  it('should test day 4 second exercise', () => {
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

    const expectedOutput = 9;

    const output = main(input);

    assert.strictEqual(output, expectedOutput);
  });
});
