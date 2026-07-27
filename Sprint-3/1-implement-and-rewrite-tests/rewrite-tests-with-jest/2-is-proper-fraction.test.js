// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: denominator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

// Case #1: numerator is smaller than denominator
test(`should return true when numerator is smaller than denominator`, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
  });

// Case #2: numerator is equal to denominator
test(`should return false when numerator and denominator are equal`, () => {
  expect(isProperFraction(5, 5)).toEqual(false);
});

// Case #3: numerator is bigger than denominator
test(`should return false when numerator is greater than denominator`, () => {
  expect(isProperFraction(7, 4)).toEqual(false);
});

// Case #4: numerator and/or denominator are negative numbers
test(`should handle negative numbers`, () => {
  expect(isProperFraction(-1, 2)).toEqual(true);
  expect(isProperFraction(-5, -2)).toEqual(false);
});
