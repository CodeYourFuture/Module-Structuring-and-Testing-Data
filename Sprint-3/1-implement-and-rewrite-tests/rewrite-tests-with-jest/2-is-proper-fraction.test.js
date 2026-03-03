// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Proper fractions - should return true
test(`should return true for proper fractions (0 <= numerator < denominator)`, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
  expect(isProperFraction(3, 4)).toEqual(true);
  expect(isProperFraction(1, 5)).toEqual(true);
  expect(isProperFraction(2, 3)).toEqual(true);
  expect(isProperFraction(5, 8)).toEqual(true);
  expect(isProperFraction(1, 100)).toEqual(true);
  expect(isProperFraction(0, 5)).toEqual(true);
});

// Improper fractions - should return false
test(`should return false for improper fractions (numerator >= denominator)`, () => {
  expect(isProperFraction(2, 1)).toEqual(false);
  expect(isProperFraction(5, 3)).toEqual(false);
  expect(isProperFraction(4, 4)).toEqual(false);
  expect(isProperFraction(10, 5)).toEqual(false);
  expect(isProperFraction(100, 99)).toEqual(false);
});

// Edge cases with zero numerator - should return true
test(`should return true when numerator is zero and denominator is positive`, () => {
  expect(isProperFraction(0, 5)).toEqual(true);
  expect(isProperFraction(0, 1)).toEqual(true);
  expect(isProperFraction(0, 100)).toEqual(true);
});

// Special case: denominator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
  expect(isProperFraction(5, 0)).toEqual(false);
});

// Negative numbers - should return false
test(`should return false for negative numbers`, () => {
  expect(isProperFraction(-1, 2)).toEqual(false);
  expect(isProperFraction(1, -2)).toEqual(false);
  expect(isProperFraction(-1, -2)).toEqual(false);
  expect(isProperFraction(-5, -3)).toEqual(false);
});
