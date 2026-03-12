// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

test(`should return true when abs(numerator) < abs(denominator)`, () => {
  expect(isProperFraction(0, 1)).toEqual(true);
  expect(isProperFraction(-3, -6)).toEqual(true);
  expect(isProperFraction(1, 2)).toEqual(true);
})

test(`should return false when abs(numerator) > abs(denominator)`, () => {
  expect(isProperFraction(2, 1)).toEqual(false);
  expect(isProperFraction(-2, -1)).toEqual(false);
})

test(`should return false when (numerator == denominator)`, () => {
  expect(isProperFraction(0, 0)).toEqual(false);
})