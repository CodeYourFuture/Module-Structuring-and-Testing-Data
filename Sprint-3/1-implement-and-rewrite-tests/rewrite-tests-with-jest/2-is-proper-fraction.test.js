// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: denominator is zero (undefined)
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

// Special case: numerator is zero (proper fraction)
test(`should return true when numerator is zero`, () => {
  expect(isProperFraction(0, 1)).toEqual(true);
});

// Special case: both numerator and denominator are zeros (undefined)
test(`should return false when both numerator and denominator are zero`, () => {
  expect(isProperFraction(0, 0)).toEqual(false);
});

// case: both values are positive and the value of the numerater is less than the value of the denominater (proper fraction)
test(`should return true for positive proper fraction`, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
});

// case: both values are positive and the value of the denominater is less than the value of the numerater (improper fraction)
test(`should return false for positive improper fraction`, () => {
  expect(isProperFraction(2, 1)).toEqual(false);
});

// case: the value of the numerater is negative and its absolute value is less than the value of the denominater (roper fraction)
test(`should return false for proper fraction`, () => {
  expect(isProperFraction(-1, 2)).toEqual(true);
});

// case: the value of the numerater is negative and its absolute value is greater than the value of the denominater (improper fraction)
test(`should return false for improper fraction`, () => {
  expect(isProperFraction(-2, 1)).toEqual(false);
});

// case: the value of the denominator is negative and its absolute value is greater than the value of the numerator (proper fraction)
test(`should return true for proper fraction`, () => {
  expect(isProperFraction(1, -2)).toEqual(true);
});

// case: the value of the denominator is negative and its absolute value is less than the value of the numerator (improper fraction)
test(`should return false for improper fraction`, () => {
  expect(isProperFraction(2, -1)).toEqual(false);
});

// case: both values of the numerator and denominator are negative and the absolute value of the numerator is less than the absolute value of the denominator (proper fraction)
test(`should return true for proper fraction`, () => {
  expect(isProperFraction(-1, -2)).toEqual(true);
});

// case: both values of the numerator and denominator are negative and the absolute value of the numerator is greater than the absolute value of the denominator (improper fraction)
test(`should return false for improper fraction`, () => {
  expect(isProperFraction(-2, -1)).toEqual(false);
});
