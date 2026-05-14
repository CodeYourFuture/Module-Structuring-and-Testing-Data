// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(-1, 0)).toEqual(false);
  expect(isProperFraction(0, 0)).toEqual(false);
  expect(isProperFraction(1, 0)).toEqual(false);
});

test(`should return true when numerator is zero`, () => {
  expect(isProperFraction(0, -1)).toEqual(true);
  expect(isProperFraction(0, 100)).toEqual(true);
});

test(`should return false when |numerator| > |denominator|`, () => {
  expect(isProperFraction(-3, -2)).toEqual(false);
  expect(isProperFraction(3, 2)).toEqual(false);
  expect(isProperFraction(-3, 2)).toEqual(false);
});

test(`should return false when |numerator| == |denominator|`, () => {
  expect(isProperFraction(-2, -2)).toEqual(false);
  expect(isProperFraction(2, 2)).toEqual(false);
  expect(isProperFraction(-2, 2)).toEqual(false);
});

test(`should return true when |numerator| < |denominator|`, () => {
  expect(isProperFraction(2, 3)).toEqual(true);
  expect(isProperFraction(-3, -4)).toEqual(true);
  expect(isProperFraction(-2, 3)).toEqual(true);
});
