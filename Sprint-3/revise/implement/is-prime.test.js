const isPrime = require('./isPrime'); // Adjust path as needed

describe('isPrime', () => {

  // Test for numbers less than or equal to 1
  test('should return false for numbers less than or equal to 1', () => {
    expect(isPrime(0)).toBe(false);
    expect(isPrime(-1)).toBe(false);
    expect(isPrime(1)).toBe(false);
  });

  // Test for prime numbers
  test('should return true for prime numbers', () => {
    expect(isPrime(2)).toBe(true);  // 2 is the smallest prime number
    expect(isPrime(3)).toBe(true);  // 3 is prime
    expect(isPrime(5)).toBe(true);  // 5 is prime
    expect(isPrime(7)).toBe(true);  // 7 is prime
    expect(isPrime(11)).toBe(true); // 11 is prime
    expect(isPrime(13)).toBe(true); // 13 is prime
    expect(isPrime(17)).toBe(true); // 17 is prime
    expect(isPrime(19)).toBe(true); // 19 is prime
    expect(isPrime(29)).toBe(true); // 29 is prime
  });

  // Test for non-prime numbers
  test('should return false for non-prime numbers', () => {
    expect(isPrime(4)).toBe(false);  // 4 is not prime
    expect(isPrime(6)).toBe(false);  // 6 is not prime
    expect(isPrime(8)).toBe(false);  // 8 is not prime
    expect(isPrime(9)).toBe(false);  // 9 is not prime
    expect(isPrime(10)).toBe(false); // 10 is not prime
    expect(isPrime(15)).toBe(false); // 15 is not prime
    expect(isPrime(21)).toBe(false); // 21 is not prime
    expect(isPrime(25)).toBe(false); // 25 is not prime
    expect(isPrime(100)).toBe(false); // 100 is not prime
  });

  // Test for large numbers
  test('should return true for large prime numbers', () => {
    expect(isPrime(104729)).toBe(true);  // 104729 is prime
    expect(isPrime(9999991)).toBe(true); // 9999991 is prime
  });

  test('should return false for large non-prime numbers', () => {
    expect(isPrime(104728)).toBe(false); // 104728 is not prime
    expect(isPrime(9999990)).toBe(false); // 9999990 is not prime
  });

});

