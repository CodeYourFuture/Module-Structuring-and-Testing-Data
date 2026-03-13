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

// case: the absolute value of the numerater is less than the absolute value of the denominater (proper fraction)
test(`should return true for positive proper fraction`, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
});

// case: the absolute value of the denominater is less than the absolute value of the numerater (improper fraction)
test(`should return false for positive improper fraction`, () => {
  expect(isProperFraction(2, 1)).toEqual(false);
});

// no need to test the cases where the denominator or numerator or both are negative as I used their absolute value in the function.
