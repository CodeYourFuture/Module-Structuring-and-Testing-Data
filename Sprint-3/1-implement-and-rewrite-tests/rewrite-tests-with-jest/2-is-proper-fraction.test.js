// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.
describe("isProperFraction", () => {
  // Denominator zero case
  test("should return false when denominator is zero", () => {
    expect(isProperFraction(1, 0)).toBe(false);
  });

  // Denominator negative case
  test("should return false when denominator is negative", () => {
    expect(isProperFraction(1, -5)).toBe(false);
    expect(isProperFraction(-3, -4)).toBe(false);
  });

  // Proper positive fraction (numerator < denominator)
  test("should return true for positive proper fractions", () => {
    expect(isProperFraction(1, 2)).toBe(true);
    expect(isProperFraction(3, 4)).toBe(true);
  });

  // Improper positive fraction (numerator >= denominator)
  test("should return false for improper positive fractions", () => {
    expect(isProperFraction(4, 3)).toBe(false);
    expect(isProperFraction(5, 5)).toBe(false);
  });

  // Negative numerators (proper fraction)
  test("should return true for negative proper fractions", () => {
    expect(isProperFraction(-1, 3)).toBe(true);
  });

  // Negative numerators that make fraction improper
  test("should return false for negative improper fractions", () => {
    expect(isProperFraction(-5, 5)).toBe(false);
  });

  // Mixed sign case (denominator positive, numerator positive/negative)
  test("should handle mixed signs correctly", () => {
    expect(isProperFraction(2, 3)).toBe(true);
    expect(isProperFraction(-2, 3)).toBe(true);
    expect(isProperFraction(4, 3)).toBe(false);
    expect(isProperFraction(-4, 3)).toBe(false);
  });
});