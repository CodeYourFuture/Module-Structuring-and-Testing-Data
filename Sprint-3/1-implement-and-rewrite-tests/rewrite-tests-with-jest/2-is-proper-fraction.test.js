// This statement loads the isProperFraction function you wrote in the implement directory.
const isProperFraction = require("../implement/2-is-proper-fraction");

test(`should return true when |numerator| < |denominator|`, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
  expect(isProperFraction(-1, 2)).toEqual(true);
  expect(isProperFraction(1, -2)).toEqual(true);
  expect(isProperFraction(-1, -2)).toEqual(true);
});

test(`should return false when |numerator| >= |denominator|`, () => {
  expect(isProperFraction(2, 1)).toEqual(false);
  expect(isProperFraction(3, 3)).toEqual(false);
});

test(`should return true when |numerator| < |denominator| (negative numerator)`, () => {
  expect(isProperFraction(-1, 2)).toEqual(true);
  expect(isProperFraction(-3, 2)).toEqual(false);
});

test(`should return true when |numerator| < |denominator| (negative denominator)`, () => {
  expect(isProperFraction(1, -2)).toEqual(true);
  expect(isProperFraction(3, -2)).toEqual(false);
});