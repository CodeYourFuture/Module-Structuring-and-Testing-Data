// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime

const isPrime = require("./is-prime"); // Adjust path as needed

describe("isPrime", () => {
  it("should return false for numbers less than or equal to 1", () => {
    expect(isPrime(1)).toBe(false); // 1 is not a prime number
    expect(isPrime(0)).toBe(false); // 0 is not a prime number
    expect(isPrime(-5)).toBe(false); // Negative numbers are not prime
  });

  it("should return true for prime numbers", () => {
    expect(isPrime(2)).toBe(true); // 2 is prime
    expect(isPrime(3)).toBe(true); // 3 is prime
    expect(isPrime(5)).toBe(true); // 5 is prime
    expect(isPrime(11)).toBe(true); // 11 is prime
  });

  it("should return false for non-prime numbers", () => {
    expect(isPrime(4)).toBe(false); // 4 is divisible by 2
    expect(isPrime(6)).toBe(false); // 6 is divisible by 2 and 3
    expect(isPrime(9)).toBe(false); // 9 is divisible by 3
    expect(isPrime(15)).toBe(false); // 15 is divisible by 3 and 5
  });

  it("should return true for larger prime numbers", () => {
    expect(isPrime(29)).toBe(true); // 29 is prime
    expect(isPrime(97)).toBe(true); // 97 is prime
  });

  it("should return false for even numbers greater than 2", () => {
    expect(isPrime(4)).toBe(false); // 4 is divisible by 2
    expect(isPrime(100)).toBe(false); // 100 is divisible by 2
  });
});
