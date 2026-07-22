// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});


// (True) - Proper fractions
test(`should return true when |numerator| < |denominator|`, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
  expect(isProperFraction(-1, 2)).toEqual(true);
  expect(isProperFraction(1, -3)).toEqual(true);
  expect(isProperFraction(-1, -3)).toEqual(true);
  expect(isProperFraction(2, 4)).toEqual(true);
});

// (False) - Improper fractions
test(`should return false when |numerator| >= |denominator|`, () => {
  expect(isProperFraction(2, 1)).toEqual(false);
  expect(isProperFraction(-2, 1)).toEqual(false);
  expect(isProperFraction(2, -1)).toEqual(false);
  expect(isProperFraction(-2, -1)).toEqual(false);
  expect(isProperFraction(3, 3)).toEqual(false);
});

// (True) - Zero numerator
test(`should return true when numerator is zero and denominator is non-zero`, () => {
  expect(isProperFraction(0, 1)).toEqual(true);
  expect(isProperFraction(0, 5)).toEqual(true);
  expect(isProperFraction(0, -5)).toEqual(true);
});
