const isPrime = require('./is-prime');

describe('isPrime', () => {
  test('should return false for numbers less than or equal to 1', () => {
    expect(isPrime(0)).toBe(false);
    expect(isPrime(1)).toBe(false);
    expect(isPrime(-5)).toBe(false);
  });

  test('should return true for prime numbers', () => {
    expect(isPrime(2)).toBe(true); // Smallest prime number
    expect(isPrime(3)).toBe(true);
    expect(isPrime(17)).toBe(true);
    expect(isPrime(97)).toBe(true);
  });

  test('should return false for non-prime numbers', () => {
    expect(isPrime(4)).toBe(false);
    expect(isPrime(9)).toBe(false);
    expect(isPrime(100)).toBe(false);
    expect(isPrime(1_000_000)).toBe(false);
  });
});
