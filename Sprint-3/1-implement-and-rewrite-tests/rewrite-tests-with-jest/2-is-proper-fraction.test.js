const isProperFraction = require("../implement/2-is-proper-fraction");

// Case 1: numerator/denominator is zero
test(`should return false when either numerator or denominator is zero`, () => {
  expect(isProperFraction(0, 1)).toEqual(false);
  expect(isProperFraction(1, 0)).toEqual(false);
  expect(isProperFraction(0, 0)).toEqual(false);
});

// Case 2: numerator and denominator are positive integers and form proper fractions
test(`should return true when either numerator is smaller than denominator`, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
  expect(isProperFraction(1, 10)).toEqual(true);
  expect(isProperFraction(9, 100)).toEqual(true);
});

// Case 3: numerator and denominator are negative and make proper fractions
test(`should return true when absolute of numerator is smaller than absolute of denominator`, () => {
  expect(isProperFraction(-1, 2)).toEqual(true);
  expect(isProperFraction(1, -10)).toEqual(true);
  expect(isProperFraction(-9, -100)).toEqual(true);
});

// Case 4: numerator/denominator is decimal and make proper fractions
test(`should return true when decimal numerator is smaller than decimal denominator`, () => {
  expect(isProperFraction(0.5, 2)).toEqual(true);
  expect(isProperFraction(1.2, -10)).toEqual(true);
  expect(isProperFraction(-9, -9.5)).toEqual(true);
});

// Case 5: numerator and denominator are positive integers and not proper fractions
test(`should return false when numerator is greater than denominator`, () => {
  expect(isProperFraction(2, 1)).toEqual(false);
  expect(isProperFraction(10, 1)).toEqual(false);
  expect(isProperFraction(100, 9)).toEqual(false);
});

// Case 6: numerator and denominator are negative and not proper fractions
test(`should return false when absolute of numerator is greater than absolute of denominator`, () => {
  expect(isProperFraction(-2, 1)).toEqual(false);
  expect(isProperFraction(10, -1)).toEqual(false);
  expect(isProperFraction(-100, -9)).toEqual(false);
});

// Case 7: numerator/denominator is decimal and not proper fractions
test(`should return false when numerator is greater than denominator`, () => {
  expect(isProperFraction(2.5, 1)).toEqual(false);
  expect(isProperFraction(10.2, 1)).toEqual(false);
  expect(isProperFraction(100.5, 9.001)).toEqual(false);
});

// Case 8: numerator/denominator is not numeric
test(`should return false when either numerator or denominator is not numeric`, () => {
  expect(isProperFraction(false, 1)).toEqual(false);
  expect(isProperFraction(true, 1)).toEqual(false);
  expect(isProperFraction("10.2", 1)).toEqual(false);
  expect(isProperFraction("", 9.001)).toEqual(false);
});
