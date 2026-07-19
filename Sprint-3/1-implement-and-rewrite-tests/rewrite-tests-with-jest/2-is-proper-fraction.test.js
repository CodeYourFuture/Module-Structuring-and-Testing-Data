// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});
test(`should return false when the abs(denominator) less abs(numerator)`, () => {
  expect(isProperFraction(7, 2)).toEqual(false);
  expect(isProperFraction(-17, -2)).toEqual(false);
  expect(isProperFraction(1, 0)).toEqual(false);
  expect(isProperFraction(0, 0)).toEqual(false);
  expect(isProperFraction(2, -2)).toEqual(false);
});
test(`should return true when abs(denominator) is greater than abs(numerator)`, () => {
  expect(isProperFraction(2, 8)).toEqual(true);
  expect(isProperFraction(-3, -10)).toEqual(true);
  expect(isProperFraction(-3, 7)).toEqual(true);
  expect(isProperFraction(8, 17)).toEqual(true);
});
