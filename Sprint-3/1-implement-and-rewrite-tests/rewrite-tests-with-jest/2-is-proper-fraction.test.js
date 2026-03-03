// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.
// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
  expect(isProperFraction(0, 1)).toEqual(true);
  expect(isProperFraction(0, -1)).toEqual(true);
  expect(isProperFraction(18, 1)).toEqual(false);
  expect(isProperFraction(7, 3)).toEqual(false);
  expect(isProperFraction(1, -2)).toEqual(true);
  expect(isProperFraction(-15, -9)).toEqual(false);
  expect(isProperFraction(-2, -6)).toEqual(true);
  expect(isProperFraction(-137, -71)).toEqual(false);
  expect(isProperFraction(-100, -189)).toEqual(true);
  expect(isProperFraction(27, 5)).toEqual(false);
  expect(isProperFraction(-29, 17)).toEqual(false);
});
