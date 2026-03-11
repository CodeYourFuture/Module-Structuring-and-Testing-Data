const isProperFraction = require("../implement/2-is-proper-fraction");

// Special case: denominator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

// Proper fractions with positive numbers
test(`should return true when the numerator is smaller than the denominator`, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
  expect(isProperFraction(3, 4)).toEqual(true);
});

// Improper fractions with positive numbers
test(`should return false when the numerator is equal to or greater than the denominator`, () => {
  expect(isProperFraction(2, 2)).toEqual(false);
  expect(isProperFraction(5, 4)).toEqual(false);
});

// Proper fractions with negative values
test(`should return true when the absolute value of the numerator is smaller than the absolute value of the denominator`, () => {
  expect(isProperFraction(-1, 2)).toEqual(true);
  expect(isProperFraction(1, -2)).toEqual(true);
});

// Improper fractions with negative values
test(`should return false when the absolute value of the numerator is equal to or greater than the absolute value of the denominator`, () => {
  expect(isProperFraction(-3, 2)).toEqual(false);
  expect(isProperFraction(3, -2)).toEqual(false);
  expect(isProperFraction(-2, -2)).toEqual(false);
});

// Special case: numerator is zero
test(`should return true when numerator is zero and denominator is not zero`, () => {
  expect(isProperFraction(0, 5)).toEqual(true);
  expect(isProperFraction(0, -5)).toEqual(true);
});
