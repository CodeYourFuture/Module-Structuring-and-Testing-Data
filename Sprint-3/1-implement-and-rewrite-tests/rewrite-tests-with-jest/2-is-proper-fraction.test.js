// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
  expect(isProperFraction(0, 0)).toEqual(false);
  expect(isProperFraction(-1, 0)).toEqual(false);
});

test(`should return true when numerator is zero and denominator is non-zero`, () => {
  expect(isProperFraction(0, 1)).toEqual(true);
  expect(isProperFraction(0, -1)).toEqual(true);
  expect(isProperFraction(0, 100)).toEqual(true);
  expect(isProperFraction(0, -100)).toEqual(true);
});

test(`should return true when absolute value of numerator is less than absolute value of denominator`, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
  expect(isProperFraction(-1, 2)).toEqual(true);
  expect(isProperFraction(1, -2)).toEqual(true);
  expect(isProperFraction(-1, -2)).toEqual(true);
});

test(`should return false when absolute value of numerator is greater than or equal to absolute value of denominator`, () => {
  expect(isProperFraction(1, 1)).toEqual(false);
  expect(isProperFraction(2, 1)).toEqual(false);
  expect(isProperFraction(-1, 1)).toEqual(false);
  expect(isProperFraction(1, -1)).toEqual(false);
  expect(isProperFraction(-1, -1)).toEqual(false);
});

test(`floating point values should be compared using absolute values`, () => {
  expect(isProperFraction(0.5, 1)).toEqual(true);
  expect(isProperFraction(1, 0.5)).toEqual(false);
  expect(isProperFraction(-0.5, 1)).toEqual(true);
  expect(isProperFraction(0.5, -1)).toEqual(true);
  expect(isProperFraction(-0.5, -1)).toEqual(true);
});
