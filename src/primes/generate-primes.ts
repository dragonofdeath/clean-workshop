export function generatePrimes(maxValue: number): number[] {
  // the only valid case
  if (maxValue >= 2) {
    // declarations
    let s: number = maxValue + 1; // size of array
    let f: boolean[] = new Array(s);
    let i: number;

    // initialize array to true.
    for (i = 0; i < s; i++) {
      f[i] = true;
    }

    // get rid of known non-primes
    f[0] = f[1] = false;

    // sieve
    let j: number;
    for (i = 2; i < Math.sqrt(s) + 1; i++) {
      if (f[i]) {
        // if i is uncrossed, cross its multiples.
        for (j = 2 * i; j < s; j += i) {
          f[j] = false; // multiple is not prime
        }
      }
    }

    // how many primes are there?
    let count: number = 0;
    for (i = 0; i < s; i++) {
      if (f[i]) {
        count++; // bump count.
      }
    }

    let primes: number[] = new Array(count);

    // move the primes into the result
    for (i = 0, j = 0; i < s; i++) {
      if (f[i]) {
        // if prime
        primes[j++] = i;
      }
    }

    return primes; // return the primes
  } else {
    // maxValue < 2
    return new Array(0); // return null array if bad input.
  }
}
