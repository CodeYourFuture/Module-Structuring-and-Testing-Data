// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

// Proper fractions (true cases)
test("should return true for proper fractions", () => {
  expect(isProperFraction(1, 2)).toBe(true);
  expect(isProperFraction(2, 3)).toBe(true);
  expect(isProperFraction(-1, 2)).toBe(true);
  expect(isProperFraction(1, -2)).toBe(true);
});

// Improper fractions (false cases)
test("should return false for improper fractions", () => {
  expect(isProperFraction(2, 1)).toBe(false);
  expect(isProperFraction(5, 3)).toBe(false);
  expect(isProperFraction(-5, 3)).toBe(false);
  expect(isProperFraction(3, -2)).toBe(false);
});

// Equal numerator and denominator
test("should return false when numerator equals denominator", () => {
  expect(isProperFraction(1, 1)).toBe(false);
  expect(isProperFraction(-4, -4)).toBe(false);
});

// Invalid case: denominator is zero
test("should return false when denominator is zero", () => {
  expect(isProperFraction(1, 0)).toBe(false);
  expect(isProperFraction(-5, 0)).toBe(false);
});
