// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});
// Special case: numerator is zero
test("should return false when denominator is zero", () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

// Positive proper fractions
test("should return true for positive proper fractions", () => {
  expect(isProperFraction(1, 2)).toEqual(true);
  expect(isProperFraction(3, 4)).toEqual(true);
});

// Positive improper fractions
test("should return false for positive improper fractions", () => {
  expect(isProperFraction(5, 2)).toEqual(false);
  expect(isProperFraction(4, 4)).toEqual(false); // equal numerator/denominator
});

// Negative numbers
test("should handle negative numerators and denominators", () => {
  expect(isProperFraction(-1, 2)).toEqual(true);
  expect(isProperFraction(1, -2)).toEqual(true);
  expect(isProperFraction(-3, -4)).toEqual(true);
  expect(isProperFraction(-5, 2)).toEqual(false);
});

// Numerator is zero
test("should return true when numerator is zero and denominator is non-zero", () => {
  expect(isProperFraction(0, 5)).toEqual(true);
});

// Both zero
test("should return false when both numerator and denominator are zero", () => {
  expect(isProperFraction(0, 0)).toEqual(false);
});
