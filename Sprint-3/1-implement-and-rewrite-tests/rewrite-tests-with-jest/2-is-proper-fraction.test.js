const isProperFraction = require("../implement/2-is-proper-fraction");

test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

test(`should return true when |numerator| < |denominator|`, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
  expect(isProperFraction(3, 7)).toEqual(true);
});

test(`should return false when |numerator| >= |denominator|`, () => {
  expect(isProperFraction(2, 1)).toEqual(false);
  expect(isProperFraction(3, 3)).toEqual(false);
});

test(`should return true when numerator is negative and |numerator| < |denominator|`, () => {
  expect(isProperFraction(-1, 2)).toEqual(true);
  expect(isProperFraction(-3, 2)).toEqual(false);
});

test(`should return true when denominator is negative and |numerator| < |denominator|`, () => {
  expect(isProperFraction(1, -2)).toEqual(true);
  expect(isProperFraction(3, -2)).toEqual(false);
});
