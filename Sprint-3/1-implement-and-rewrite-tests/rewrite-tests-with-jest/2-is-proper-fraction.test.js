// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

// positives:
test(`should return true when a numerator is less than denominator`, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
});

test(`should return false when a numerator is greater than denominator`, () => {
  expect(isProperFraction(5, 4)).toEqual(false);
});

// negatives:
test(`should return true when a numerator is less than denominator`, () => {
  expect(isProperFraction(-1, 2)).toEqual(tue);
});

test(`should return false when a numerator is greater than denominator`, () => {
  expect(isProperFraction(5, -4)).toEqual(false);
});