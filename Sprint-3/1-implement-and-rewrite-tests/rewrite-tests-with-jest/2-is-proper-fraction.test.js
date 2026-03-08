// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// These tests cover different combinations of values such as:
// positive numbers, negative numbers, zeros, and improper fractions.

describe("isProperFraction", () => {
  // Special case: denominator is zero
  test("should return false when denominator is zero", () => {
    expect(isProperFraction(1, 0)).toEqual(false);
  });

  // Special case: numerator is zero
  test("should return true when numerator is zero and denominator is positive", () => {
    expect(isProperFraction(0, 5)).toEqual(true);
  });

  // Proper fraction: numerator is positive and less than denominator
  test("should return true for a proper fraction", () => {
    expect(isProperFraction(1, 2)).toEqual(true);
    expect(isProperFraction(3, 4)).toEqual(true);
  });

  // Improper fraction: numerator is greater than or equal to denominator
  test("should return false for an improper fraction", () => {
    expect(isProperFraction(5, 4)).toEqual(false);
    expect(isProperFraction(4, 4)).toEqual(false);
  });

  // Negative numerator
  test("should return false when numerator is negative", () => {
    expect(isProperFraction(-1, 2)).toEqual(false);
  });

  // Negative denominator
  test("should return false when denominator is negative", () => {
    expect(isProperFraction(1, -2)).toEqual(false);
  });
});
