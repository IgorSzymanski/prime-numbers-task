export const min = 2;
export const max = 1e7;

export function generatePrimes(start: number, range: number): number[] {
  const primes: number[] = [];
  const end = start + range;

  outerLoop: for (let i = start; i < end; i++) {
    innerLoop: for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        continue outerLoop;
      }
    }
    primes.push(i);
  }

  return primes;
}

export function originalGeneratePrimes(start: number, range: number): number[] {
  const primes: number[] = []; 
  let isPrime = true;
  let end = start + range;
  for (let i = start; i < end; i++) {
    for (let j = min; j < Math.sqrt(end); j++) {
      if (i !== j && i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
    isPrime = true;
  }

  return primes;
}