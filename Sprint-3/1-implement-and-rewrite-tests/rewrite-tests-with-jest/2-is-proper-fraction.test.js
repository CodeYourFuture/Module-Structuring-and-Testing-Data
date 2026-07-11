// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: denominator is zero.
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

// Special case: numerator is zero.
test(`should return false when numerator is zero`, () => {
  expect(isProperFraction(0, 1)).toEqual(false);
});

// Special case: numerator is equal to denominators is not a proper fraction.
test(`should return false when numerator is equal to denominator`, () => {
  expect(isProperFraction(2, 2)).toEqual(false);
});

// Special case: numerator is negative is not a proper fraction.
test(`should return false when numerator is negative value`, () => {
  expect(isProperFraction(-1, 2)).toEqual(false);
});

// Special case: denominator is negative is not a proper fraction.
test(`should return false denominator  is negative value `, () => {
  expect(isProperFraction(1, -2)).toEqual(false);
});

// Special case: numerator and denominator are both negative values is a proper fraction.
test(`should return true when numerator ans denominator are both negative values `, () => {
  expect(isProperFraction(-5, -6)).toEqual(true);
});

// Special case: negative numerator with smaller value then negative dominator is not a proper fraction
test(`should return false when negative numerator is smaller than negative denominator `, () => {
  expect(isProperFraction(-6, -5)).toEqual(false);
});
