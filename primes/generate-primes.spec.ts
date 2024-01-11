// @ts-ignore
import { it, expect } from 'bun:test';
import { generatePrimes } from './generate-primes';

it('generatePrimes', () => {
  expect(generatePrimes(1)).toEqual([]);
  expect(generatePrimes(10)).toEqual([2, 3, 5, 7]);
});
