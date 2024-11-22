// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime
const isPrime = require("./is-prime");

describe("isPrime function", () => {
  test("returns correct result for numbers less than 2", () => {
    expect(isPrime(1)).toBe("1 is not prime ");
    expect(isPrime(0)).toBe("0 is not prime ");
    expect(isPrime(-5)).toBe("-5 is not prime ");
  });

  test("returns correct result for number 2", () => {
    expect(isPrime(2)).toBe("2 is prime");
  });

  test("returns correct result for even numbers greater than 2", () => {
    expect(isPrime(4)).toBe("4 is not prime");
    expect(isPrime(8)).toBe("8 is not prime");
  });

  test("returns correct result for odd prime numbers", () => {
    expect(isPrime(3)).toBe("3 is prime");
    expect(isPrime(5)).toBe("5 is prime");
    expect(isPrime(7)).toBe("7 is prime");
  });

  test("returns correct result for non-prime odd numbers", () => {
    expect(isPrime(9)).toBe("9 is not prime");
    expect(isPrime(15)).toBe("15 is not prime");
  });

  test("returns correct result for large numbers", () => {
    expect(isPrime(75456746876)).toBe("75456746876 is not prime");
  });
});
