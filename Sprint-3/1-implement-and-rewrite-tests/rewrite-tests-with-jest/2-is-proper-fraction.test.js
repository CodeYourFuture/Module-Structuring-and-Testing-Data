// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: denominator is zero
test("should return false when denominator is zero", () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

// Case: numerator is zero
test("should return true when numerator is zero and denominator is positive", () => {
  expect(isProperFraction(0, 1)).toEqual(true);
});

// Proper fractions
test("should return true when abs(numerator) < abs(denominator)", () => {
  expect(isProperFraction(1, 2)).toBe(true);
  expect(isProperFraction(-1, 2)).toBe(true);
  expect(isProperFraction(1, -2)).toBe(true);
  expect(isProperFraction(-1, -2)).toBe(true);
});

// Improper fractions
test("should return false when abs(numerator) >= abs(denominator)", () => {
  expect(isProperFraction(2, 2)).toBe(false);
  expect(isProperFraction(3, 2)).toBe(false);
  expect(isProperFraction(-3, 2)).toBe(false);
});
