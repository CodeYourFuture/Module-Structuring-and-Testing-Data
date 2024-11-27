// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime

// ## 🦉 Plan
// - I'll figure out the requirements.
// https://www.w3resource.com/javascript-exercises/javascript-function-exercise-8.php
// - I'll write a tests for the isPrime function.
// - I'll write a function that passes the test.
// - I'll write a new test to increase the reliability of the function.

function isPrime(num) {
  // First handle numbers less than 2
  if (num < 2) return false;

  // Check for divisibility up to square root
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

describe("Prime Number Tests 🔢", () => {
  // Test non-prime numbers
  it("should identify non-prime numbers correctly", () => {
    expect(isPrime(1)).toEqual(false); // 1 is not prime!
    expect(isPrime(4)).toEqual(false); // 4 = 2 × 2
  });

  // Test prime numbers
  it("should identify prime numbers correctly", () => {
    expect(isPrime(2)).toEqual(true); // 2 is prime
    expect(isPrime(3)).toEqual(true); // 3 is prime
  });
});
