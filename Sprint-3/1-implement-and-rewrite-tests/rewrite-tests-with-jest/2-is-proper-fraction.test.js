// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

// Denominator zero
test("should return false when denominator is zero", () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

// Proper fractions
test("should return true for proper fractions (numerator < denominator)", () => {
  expect(isProperFraction(1, 2)).toEqual(true);
  expect(isProperFraction(2, 3)).toEqual(true);
  expect(isProperFraction(3, 4)).toEqual(true);
  expect(isProperFraction(0, 5)).toEqual(true); // zero numerator is allowed
});

// Improper fractions
test("should return false for improper fractions (numerator >= denominator)", () => {
  expect(isProperFraction(5, 5)).toEqual(false);
  expect(isProperFraction(7, 3)).toEqual(false);
});

// Negative numerators
test("should return true when numerator is negative and denominator is positive", () => {
  expect(isProperFraction(-1, 2)).toEqual(true);
});

// Negative denominators
test("should return false when denominator is negative", () => {
  expect(isProperFraction(1, -2)).toEqual(false);
});

// Both negative
test("should return false when both numerator and denominator are negative", () => {
  expect(isProperFraction(-3, -2)).toEqual(false);
});
