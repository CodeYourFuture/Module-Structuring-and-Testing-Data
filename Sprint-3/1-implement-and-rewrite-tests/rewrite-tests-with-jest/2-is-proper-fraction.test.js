// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: denominator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

//Special case: numerator is zero
test(`should return false when numerator is zero`, () => {
  expect(isProperFraction(0, 1)).toEqual(false);
});
// Proper functions with absolute numerator < absolute denominator
test(`should return true for proper positive fractions`, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
  expect(isProperFraction(3, 4)).toEqual(true);
});
// Proper functions with negative numbers
test(`should return true for proper negative fractions`, () => {
  expect(isProperFraction(-1, 2)).toEqual(true);
  expect(isProperFraction(1, -3)).toEqual(true);
  expect(isProperFraction(-2, -5)).toEqual(true);
});
// Improper functions with absolute numerator >= absolute denominator
test(`should return false for improper fractions`, () => {
  expect(isProperFraction(5, 3)).toEqual(false);
  expect(isProperFraction(10, 10)).toEqual(false);
  expect(isProperFraction(-7, 3)).toEqual(false);
});
// Special cases: numerator or denominator is NAN
test(`should return false when numerator or denominator is NaN`, () => {
  expect(isProperFraction(NaN, 5)).toEqual(false);
  expect(isProperFraction(3, NaN)).toEqual(false);
  expect(isProperFraction(NaN, NaN)).toEqual(false);
});
// Special cases: non-number strings
test(`should return false for non-numeric strings`, () => {
  expect(isProperFraction("a", 5)).toEqual(false);
  expect(isProperFraction(3, "b")).toEqual(false);
});
