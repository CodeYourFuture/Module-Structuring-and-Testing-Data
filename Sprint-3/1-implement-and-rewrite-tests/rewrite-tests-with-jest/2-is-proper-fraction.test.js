// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// 1. Proper fractions (absolute numerator < absolute denominator)
test(`should return true for proper fractions (positive and negative)`, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
  expect(isProperFraction(-1, 4)).toEqual(true);
  expect(isProperFraction(3, -5)).toEqual(true);
  expect(isProperFraction(-2, -7)).toEqual(true);
});

// 2. Improper fractions (absolute numerator > absolute denominator)
test(`should return false for improper fractions where numerator is greater than denominator`, () => {
  expect(isProperFraction(3, 2)).toEqual(false);
  expect(isProperFraction(-5, 4)).toEqual(false);
  expect(isProperFraction(7, -3)).toEqual(false);
});

// 3. Improper fractions (absolute numerator == absolute denominator)
test(`should return false when numerator equals denominator`, () => {
  expect(isProperFraction(5, 5)).toEqual(false);
  expect(isProperFraction(-5, 5)).toEqual(false);
  expect(isProperFraction(5, -5)).toEqual(false);
});

// 4. Special case: numerator is zero
test(`should return true when numerator is zero and denominator is not zero`, () => {
  expect(isProperFraction(0, 5)).toEqual(true);
  expect(isProperFraction(0, -5)).toEqual(true);
});

// 5. Special case: denominator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
  expect(isProperFraction(-1, 0)).toEqual(false);
  expect(isProperFraction(0, 0)).toEqual(false);
});
