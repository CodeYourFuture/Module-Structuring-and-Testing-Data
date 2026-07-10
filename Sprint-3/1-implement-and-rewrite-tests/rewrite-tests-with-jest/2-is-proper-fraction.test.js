// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});
// proper fractions
test(`should return true when denominator is higher than numerator`, () => {
  expect(isProperFraction(0, 1)).toEqual(true);
  expect(isProperFraction(2, 7)).toEqual(true);
  expect(isProperFraction(89, 101)).toEqual(true);
});
// Special case: numerator or denominator is negative, we consider the absolute values for fractions so ignore the negative signs
test(`should return true when negative/positive numerator is less than the positive/negative denominator`, () => {
  expect(isProperFraction(-20, -30)).toEqual(true);
  expect(isProperFraction(-1, 2)).toEqual(true);
  expect(isProperFraction(58, -68)).toEqual(true);
});
// Special case: numerator or denominator is negative, we consider the absolute values for fractions so ignore the negative signs
test(`should return false when negative/positive numerator is greater than the positive/negative denominator`, () => {
  expect(isProperFraction(-50, 10)).toEqual(false);
  expect(isProperFraction(100, 2)).toEqual(false);
  expect(isProperFraction(-1, -0)).toEqual(false);
});