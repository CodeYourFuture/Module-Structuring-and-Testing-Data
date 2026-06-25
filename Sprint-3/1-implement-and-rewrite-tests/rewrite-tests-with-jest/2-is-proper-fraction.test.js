// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

//

// This statement loads the isProperFraction function
const isProperFraction = require("../implement/2-is-proper-fraction");

// Case 1: denominator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

// Case 2: numerator is zero
test(`should return true when numerator is zero and denominator is non-zero`, () => {
  expect(isProperFraction(0, 5)).toEqual(true);
});

// Case 3: positive proper fractions
test(`should return true for positive proper fractions`, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
  expect(isProperFraction(3, 4)).toEqual(true);
});

// Case 4: positive improper fractions
test(`should return false when numerator is equal or greater`, () => {
  expect(isProperFraction(5, 5)).toEqual(false);
  expect(isProperFraction(7, 4)).toEqual(false);
});

// Case 5: negative fractions
test(`should correctly handle negative values`, () => {
  expect(isProperFraction(-1, 3)).toEqual(true);
  expect(isProperFraction(-5, 2)).toEqual(false);
  expect(isProperFraction(1, -3)).toEqual(true);
  expect(isProperFraction(-1, -2)).toEqual(true);
});
