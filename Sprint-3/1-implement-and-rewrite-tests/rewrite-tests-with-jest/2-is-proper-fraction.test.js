// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
  expect(isProperFraction(0, 1)).toEqual(true);
  expect(isProperFraction(0, -1)).toEqual(true);
  expect(isProperFraction(1, 1)).toEqual(false);
  expect(isProperFraction(1, 2)).toEqual(true);
  expect(isProperFraction(1, -2)).toEqual(true);
  expect(isProperFraction(-6, -2)).toEqual(false);
  expect(isProperFraction(-2, -6)).toEqual(true);
  expect(isProperFraction(-200, -0)).toEqual(false);
  expect(isProperFraction(-0, -1000)).toEqual(true);
  expect(isProperFraction(5, 3)).toEqual(false);
  expect(isProperFraction(-25, 3)).toEqual(false);
});
