import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import { main } from './first';

describe('Day 6 first exercise tests', () => {
  it('should test day 6 first exercise', () => {
    const input = `....#.....
.........#
..........
..#.......
.......#..
..........
.#..^.....
........#.
#.........
......#...`;

    const expectedOutput = 41;

    const output = main(input);

    assert.strictEqual(output, expectedOutput);
  });
});
