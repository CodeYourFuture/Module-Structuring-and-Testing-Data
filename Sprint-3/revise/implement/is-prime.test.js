// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime
const isPrime = require('./is-prime'); // Assuming isPrime.js is in the same folder

describe('isPrime function', () => {
  test('should return false for numbers less than or equal to 1', () => {
    expect(isPrime(0)).toBe(false);
    expect(isPrime(1)).toBe(false);
  });

  test('should return true for 2', () => {
    expect(isPrime(2)).toBe(true);
  });

  test('should return false for even numbers greater than 2', () => {
    expect(isPrime(4)).toBe(false);
    expect(isPrime(6)).toBe(false);
    expect(isPrime(8)).toBe(false);
  });

  test('should return true for prime numbers greater than 2', () => {
    expect(isPrime(3)).toBe(true);
    expect(isPrime(5)).toBe(true);
    expect(isPrime(7)).toBe(true);
    expect(isPrime(11)).toBe(true);
  });

  test('should return false for non-prime numbers greater than 2', () => {
    expect(isPrime(9)).toBe(false);
    expect(isPrime(15)).toBe(false);
    expect(isPrime(21)).toBe(false);
  });

  test('should return false for large non-prime numbers', () => {
    expect(isPrime(1000000)).toBe(false);
    expect(isPrime(999999)).toBe(false);
  });

  test('should return true for large prime numbers', () => {
    expect(isPrime(104729)).toBe(true); // Example of a large prime
  });
});
