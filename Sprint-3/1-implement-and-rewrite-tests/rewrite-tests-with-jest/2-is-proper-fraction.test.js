// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: denominator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

// Special case: numerator is zero
test(`should return true when numerator is zero`, () => {
  expect(isProperFraction(0, 4)).toEqual(true);
});

// Special case: numerator equals denominator
test(`should return false when numerator equals denominator`, () => {
  expect(isProperFraction(7, 7)).toEqual(false);
});

// Special case: numerator is smaller than denominator
test(`should return true when numerator is smaller than denominator`, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
});

// Special case: positive proper fraction
test(`should return true for positive proper fraction`, () => {
  expect(isProperFraction(3, 5)).toEqual(true);
});

// Special case: numerator is larger than denominator
test(`should return false when numerator is larger than denominator`, () => {
  expect(isProperFraction(8, 3)).toEqual(false);
});

// Special case: negative denominator
test(`should return true when denominator is negative`, () => {
  expect(isProperFraction(2, -6)).toEqual(true);
});

// Special case: negative numerator
test(`should return true when numerator is negative`, () => {
  expect(isProperFraction(-1, 4)).toEqual(true);
});

// Special case: small positive proper fraction
test(`should return true for small positive proper fraction`, () => {
  expect(isProperFraction(1, 100)).toEqual(true);
});
