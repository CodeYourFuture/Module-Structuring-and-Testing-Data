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
// Special case: Since the abs(denominator) is 1, only a numerator of 0 should be proper.
test("should handle denominator of 1", () => {
  expect(isProperFraction(1, 1)).toEqual(false);
  expect(isProperFraction(2, 1)).toEqual(false);
});
// Special case: proper fraction requires the numerator to be strictly less than the denominator (in absolute value).
test("should return false when numerator equals denominator", () => {
  expect(isProperFraction(5, 5)).toEqual(false);
  expect(isProperFraction(-5, 5)).toEqual(false);
  expect(isProperFraction(5, -5)).toEqual(false);
  expect(isProperFraction(-5, -5)).toEqual(false);
});
