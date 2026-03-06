// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

// Positive proper fractions
test(`should return true for positive proper fractions`, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
  expect(isProperFraction(2, 3)).toEqual(true);
  expect(isProperFraction(7, 10)).toEqual(true);
});

// Positive improper fractions
test(`should return false for positive improper fractions`, () => {
  expect(isProperFraction(3, 2)).toEqual(false);
  expect(isProperFraction(5, 5)).toEqual(false);
  expect(isProperFraction(10, 3)).toEqual(false);
});

// Negative numerator
test(`should return false when numerator is negative`, () => {
  expect(isProperFraction(-1, 2)).toEqual(false);
  expect(isProperFraction(-3, 4)).toEqual(false);
});

// Negative denominator
test(`should return false when denominator is negative`, () => {
  expect(isProperFraction(1, -2)).toEqual(false);
  expect(isProperFraction(3, -4)).toEqual(false);
});

// Zero numerator
test(`should return false when numerator is zero`, () => {
  expect(isProperFraction(0, 2)).toEqual(false);
  expect(isProperFraction(0, -3)).toEqual(false);
});

// Both negative (improper)
test(`should return false for negative improper fractions`, () => {
  expect(isProperFraction(-3, -2)).toEqual(false);
});

// Both negative (proper)
test(`should return false for negative proper fractions`, () => {
  expect(isProperFraction(-1, -2)).toEqual(false);
});
