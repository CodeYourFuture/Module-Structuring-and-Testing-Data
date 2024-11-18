// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime
function isPrime(num) {
  if (typeof num !== "number") {
    throw new Error("Input must be a number");
  }
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

describe("isPrime", () => {
  test("should return true for a prime number", () => {
    expect(isPrime(7)).toBe(true);
    expect(isPrime(13)).toBe(true);
  });

  test("should return false for a non-prime number", () => {
    expect(isPrime(4)).toBe(false);
    expect(isPrime(15)).toBe(false);
  });

  test("should return false for 1 (not prime)", () => {
    expect(isPrime(1)).toBe(false);
  });

  test("should return false for 0 (not prime)", () => {
    expect(isPrime(0)).toBe(false);
  });

  test("should return false for negative numbers", () => {
    expect(isPrime(-7)).toBe(false);
  });
  test("should throw an error if the input is not a number", () => {
    expect(() => isPrime("7")).toThrow("Input must be a number");
    expect(() => isPrime(null)).toThrow("Input must be a number");
  });
});
