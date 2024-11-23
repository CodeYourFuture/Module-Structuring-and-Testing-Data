// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should:
// - Return true if num is prime (only divisible by 1 and itself)
// - Return false if num is not prime
// - Return false for num <= 1 since they are not prime numbers
// - Handle invalid inputs by returning false

function isPrime(num) {
  if (!Number.isInteger(num) || num <= 1) {
    return false;
  }
  
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

describe('isPrime', () => {
  test('returns true for prime numbers', () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true); 
    expect(isPrime(5)).toBe(true);
    expect(isPrime(7)).toBe(true);
    expect(isPrime(11)).toBe(true);
    expect(isPrime(13)).toBe(true);
  });

  test('returns false for non-prime numbers', () => {
    expect(isPrime(4)).toBe(false);
    expect(isPrime(6)).toBe(false);
    expect(isPrime(8)).toBe(false);
    expect(isPrime(9)).toBe(false);
    expect(isPrime(10)).toBe(false);
  });

  test('returns false for numbers <= 1', () => {
    expect(isPrime(1)).toBe(false);
    expect(isPrime(0)).toBe(false);
    expect(isPrime(-1)).toBe(false);
  });

  test('returns false for invalid inputs', () => {
    expect(isPrime('2')).toBe(false);
    expect(isPrime(null)).toBe(false);
    expect(isPrime(undefined)).toBe(false);
    expect(isPrime(3.14)).toBe(false);
  });
});
