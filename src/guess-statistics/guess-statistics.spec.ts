import { it, expect } from 'bun:test';
import { printGuessStatistics } from './guess-statistics';

it.only('should print guess statistics', () => {
  expect(printGuessStatistics('A', 0)).toBe('There are no As');
  expect(printGuessStatistics('B', 1)).toBe('There is 1 B');
  expect(printGuessStatistics('C', 2)).toBe('There are 2 Cs');
});
