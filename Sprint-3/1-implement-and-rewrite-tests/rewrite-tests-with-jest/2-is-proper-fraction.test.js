// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero

test(`should return true when the absolute value of the numerator is less than the absolute value of the denominator and the denominator is not 0`, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
  expect(isProperFraction(1, -3)).toEqual(true);
  expect(isProperFraction(3.5, 4)).toEqual(true);
  expect(isProperFraction(-99, -100)).toEqual(true);
  expect(isProperFraction(8, 12.5)).toEqual(true);
  expect(isProperFraction(-6, 12)).toEqual(true);
  expect(isProperFraction(0.03, 0.1)).toEqual(true);
});

test(`should return true when numerator is equal to 0 and denominator is either positive or negative`, () => {
  expect(isProperFraction(0, -5)).toEqual(true);
  expect(isProperFraction(0, 56)).toEqual(true);
  expect(isProperFraction(0, 0.1)).toEqual(true);
  expect(isProperFraction(0, -8.9)).toEqual(true);
});

test(`should return false when the denominator is equal to zero`, () => {
  expect(isProperFraction(-1, 0)).toEqual(false);
  expect(isProperFraction(0, 0)).toEqual(false);
  expect(isProperFraction(15, 0)).toEqual(false);
  expect(isProperFraction(6.4, 0)).toEqual(false);
  expect(isProperFraction(-8.5, 0)).toEqual(false);
});

test(`should return false when the absolute value of the numerator is greater than the absolute value of the denominator`, () => {
  expect(isProperFraction(3, 2)).toEqual(false);
  expect(isProperFraction(-9, 3)).toEqual(false);
  expect(isProperFraction(-15, -4)).toEqual(false);
  expect(isProperFraction(36, -5)).toEqual(false);
  expect(isProperFraction(3.8, 2.7)).toEqual(false);
  expect(isProperFraction(1, 0.7)).toEqual(false);
});

test(`should return false when the absolute value of the numerator is equal to the absolute value of the denominator`, () => {
  expect(isProperFraction(3, 3)).toEqual(false);
  expect(isProperFraction(-19, -19)).toEqual(false);
  expect(isProperFraction(7.45, 7.45)).toEqual(false);
  expect(isProperFraction(67, -67)).toEqual(false);
  expect(isProperFraction(-8, 8)).toEqual(false);
});
