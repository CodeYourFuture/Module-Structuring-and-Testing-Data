// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});
test(`should return true when the function is proper fraction`, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
});
test(`should return false when the function is improper fraction`, () => {
  expect(isProperFraction(8, 5)).toEqual(false);
});
test(`should return false when the numerator is equal to denominator`, () => {
  expect(isProperFraction(4, 4)).toEqual(false);
});
test(`should return true when numerator is zero`, () => {
  expect(isProperFraction(0, 1)).toEqual(true);
});
test(`should return false when numerator is negative`, () => {
  expect(isProperFraction(-1, 1)).toEqual(false);
});
test(`should return false when denominator is negative`, () => {
  expect(isProperFraction(1, -1)).toEqual(false);
});
test(`should return true when numerator is negative but not the same number as denominator`, () => {
  expect(isProperFraction(-1, 2)).toEqual(true);
});
test(`should return true when denominator is negative but not the same number as denominator`, () => {
  expect(isProperFraction(1, -2)).toEqual(true);
});