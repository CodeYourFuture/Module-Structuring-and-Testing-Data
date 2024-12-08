// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime

// What is a prime number?
// Prime numbers are special numbers, greater than 1, that have exactly two factors, themselves and 1.

function isPrime(num){
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}
console.log(isPrime("4"))

// Test....

describe('isPrime function', () => {
  test('should return false for numbers less than 2', () => {
    expect(isPrime(0)).toBe(false);
    expect(isPrime(1)).toBe(false);
  });

  test('should return true for prime numbers', () => {
    expect(isPrime(2)).toBe(true); // 2 is prime
    expect(isPrime(3)).toBe(true); // 3 is prime
    expect(isPrime(5)).toBe(true); // 5 is prime
    expect(isPrime(7)).toBe(true); // 7 is prime
    expect(isPrime(11)).toBe(true); // 11 is prime
  });

  test('should return false for non-prime numbers', () => {
    expect(isPrime(4)).toBe(false); // 4 is not prime
    expect(isPrime(6)).toBe(false); // 6 is not prime
    expect(isPrime(8)).toBe(false); // 8 is not prime
    expect(isPrime(9)).toBe(false); // 9 is not prime
    expect(isPrime(10)).toBe(false); // 10 is not prime
  });

  test('should return false for negative numbers', () => {
    expect(isPrime(-1)).toBe(false);
    expect(isPrime(-5)).toBe(false);
  });
});
