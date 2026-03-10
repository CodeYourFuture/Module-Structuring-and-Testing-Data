// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

// Normal case: 
test(`should return true in normal scenario`, () => {
  expect(isProperFraction(5, 10)).toEqual(true);
});
// Boundary Value
test(`should return false when numerator is 0`, () => {
  expect(isProperFraction(0, 5)).toEqual(false);
});
// Improper Fraction
test(`should return false when numerator is greater than denominator`, () => {
  expect(isProperFraction(8, 3)).toEqual(false);
});
// Negative Value
test(`should return false when numerator is negative`, () => {
  expect(isProperFraction(-3, 8)).toEqual(false);
  
});
// Very Small
test(`should return true with very small values`, () => {
  expect(isProperFraction(0.0001, 999999)).toEqual(true);
});
// very large
test(`should return false with very large`, () => {
  expect(isProperFraction(999999, 0.0001)).toEqual(false);
});