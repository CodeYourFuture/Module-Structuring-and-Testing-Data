// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

describe("isProperFraction", () => {
  test("returns true for standard proper fractions", () => {
    expect(isProperFraction(1, 2)).toBe(true);
    expect(isProperFraction(2, 5)).toBe(true);
  });

  test("returns true for negative proper fractions", () => {
    expect(isProperFraction(-1, 3)).toBe(true);
    expect(isProperFraction(1, -3)).toBe(true);
    expect(isProperFraction(-2, -5)).toBe(true);
  });

  test("returns false for improper fractions (n >= d)", () => {
    expect(isProperFraction(3, 2)).toBe(false);
    expect(isProperFraction(1, 1)).toBe(false);
    expect(isProperFraction(-5, 2)).toBe(false);
  });

  test("returns true when numerator is zero (if denominator is non-zero)", () => {
    expect(isProperFraction(0, 5)).toBe(true);
    expect(isProperFraction(0, -1)).toBe(true);
  });

  test("returns false when denominator is zero", () => {
    expect(isProperFraction(1, 0)).toBe(false);
    expect(isProperFraction(0, 0)).toBe(false);
  });
});