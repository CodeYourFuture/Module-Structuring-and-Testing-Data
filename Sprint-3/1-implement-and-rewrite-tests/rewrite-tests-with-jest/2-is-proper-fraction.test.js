// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});
test(`should  return true when denominator is 5`, () => {
  expect(isProperFraction(2, 5)).toEqual(true);
});

test(`should return true when denominator is 10`, () => {
  expect(isProperFraction(4, 10)).toEqual(true);
});

test(`should return false when denominator is -1`, () => {
  expect(isProperFraction(3, -1)).toEqual(false);
});

test(`should return false when denominator is 0`, () => {
  expect(isProperFraction(5, 0)).toEqual(false);
});
