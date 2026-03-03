// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is 0`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});
test(`should return true when numerator is less than denominator`, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
});
test(`should return false when numerator is greater than denominator`, () => {
  expect(isProperFraction(7, 1)).toEqual(false);
});
test(`should return true when numerator is 0 and denominator is positive`, () => {
  expect(isProperFraction(0, 5)).toEqual(true);
});
test(`should return true when numerator and denominator are negative`, () => {
  expect(isProperFraction(-1, -2)).toEqual(true);
});
test(`should return false when numerator and denominator are negative and numerator is greater than denominator`, () => {
  expect(isProperFraction(-2, -1)).toEqual(false);
});
test(`should return true when numerator is negative and denominator is positive`, () => {
  expect(isProperFraction(-2, 5)).toEqual(true);
});
test(`should return false when numerator is positive and denominator is negative`, () => {
  expect(isProperFraction(5, -2)).toEqual(false);
});
test(`should return false when numerator equals denominator`, () => {
  expect(isProperFraction(5, 5)).toEqual(false);
});
test(`should return false when denominator is 0 and numerator is positive`, () => {
  expect(isProperFraction(5, 0)).toEqual(false);
});
test(`should return false when denominator is 0 and numerator is negative`, () => {
  expect(isProperFraction(-2, 0)).toEqual(false);
});
