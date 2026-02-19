// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});
test(`1/2`, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
});
test(`7/1`, () => {
  expect(isProperFraction(7, 1)).toEqual(false);
});
test(`0/5`, () => {
  expect(isProperFraction(0, 5)).toEqual(true);
});
test(`-1/-2`, () => {
  expect(isProperFraction(-1, -2)).toEqual(true);
});
test(`-2/-1`, () => {
  expect(isProperFraction(-2, -1)).toEqual(false);
});
test(`-2/5`, () => {
  expect(isProperFraction(-2, 5)).toEqual(true);
});
test(`5/-2`, () => {
  expect(isProperFraction(5, -2)).toEqual(false);
});
test(`5/5`, () => {
  expect(isProperFraction(5, 5)).toEqual(false);
});
