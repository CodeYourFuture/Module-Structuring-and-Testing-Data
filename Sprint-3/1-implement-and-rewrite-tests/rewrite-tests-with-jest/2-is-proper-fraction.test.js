// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

test(`should return true when denominator is greater than numerator (2)`, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
});

test(`should return false when denominator is smaller than the numerator (1)`, () => {
  expect(isProperFraction(2, 1)).toEqual(false);
});

test(`should return true when both values are valid numbers`, () => {
  expect(isProperFraction(-1, -2)).toEqual(true);
});

test(`should return false when a number is not an integer`, () => {
  expect(isProperFraction("1", 2)).toEqual(false);
});

