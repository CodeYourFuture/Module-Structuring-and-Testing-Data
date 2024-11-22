// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime
// isPrime.test.js
// const isPrime = require('./isPrime'); // Import the isPrime function if it's in a separate file

// isPrime.test.js
// const isPrime = require('./isPrime'); // Import the isPrime function if it's in a separate file
function isPrime(num) {
  // If the number is less than or equal to 1, it's not prime
  if (num <= 1) {
    return false;
  }

  // Check if the number is divisible by any number from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // If divisible, it's not a prime
    }
  }

  // If no divisors found, it's a prime number
  return true;
}
  
  // Test 1: Check if 2 is prime (the smallest prime number)
  test('checks if 2 is prime', () => {
    expect(isPrime(2)).toBe(true); // 2 is a prime number
  });

  // Test 2: Check if 3 is prime
  test('checks if 3 is prime', () => {
    expect(isPrime(3)).toBe(true); // 3 is prime
  });

  // Test 3: Check if 4 is not prime
  test('checks if 4 is not prime', () => {
    expect(isPrime(4)).toBe(false); // 4 is divisible by 2, so it is not prime
  });

  // Test 4: Check if 11 is prime
  test('checks if 11 is prime', () => {
    expect(isPrime(11)).toBe(true); // 11 is prime
  });

  // Test 5: Check if 16 is not prime
  test('checks if 16 is not prime', () => {
    expect(isPrime(16)).toBe(false); // 16 is divisible by 2 and 4, so it's not prime
  });

  // Test 6: Check if 1 is not prime
  test('checks if 1 is not prime', () => {
    expect(isPrime(1)).toBe(false); // 1 is not a prime number
  });

  // Test 7: Check if 19 is prime
  test('checks if 19 is prime', () => {
    expect(isPrime(19)).toBe(true); // 19 is prime
  });

  // Test 8: Check if a large number is prime (example: 29)
  test('checks if 29 is prime', () => {
    expect(isPrime(29)).toBe(true); // 29 is prime
  });

  // Test 9: Check if a large non-prime number (example: 100) is prime
  test('checks if 100 is not prime', () => {
    expect(isPrime(100)).toBe(false); // 100 is divisible by 2 and 5, so it's not prime
  });



