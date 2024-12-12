const isProperFraction = require("./is-proper-fraction");

describe("isProperFraction Tests", () => {
  test("Proper Fraction Check", () => {
    expect(isProperFraction(2, 3)).toBe(true);
  });

  test("Improper Fraction Check", () => {
    expect(isProperFraction(5, 2)).toBe(false);
  });

  test("Zero Denominator Check", () => {
    expect(() => isProperFraction(3, 0)).toThrow("Denominator cannot be zero");
  });

  test("Negative Fraction Check", () => {
    expect(isProperFraction(-4, 7)).toBe(true);
  });

  test("Equal Numerator and Denominator Check", () => {
    expect(isProperFraction(3, 3)).toBe(false);
  });

  // Additional tests

  test("Negative Denominator Check", () => {
    expect(isProperFraction(3, -5)).toBe(true);
  });

  test("Negative Fraction Improper Check", () => {
    expect(isProperFraction(-13, 5)).toBe(false);
  });

  test("Negative Denominator Improper Check", () => {
    expect(isProperFraction(9, -6)).toBe(false);
  });
});
