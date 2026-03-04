// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
  expect(isProperFraction(0, 0)).toEqual(false);
});

// When numerator is greater than the denominator
test(`should return false when numerator > denominator`, () => {
  expect(isProperFraction(5, 3)).toEqual(false);
  expect(isProperFraction(140, 7)).toEqual(false);
  expect(isProperFraction(-16, -5)).toEqual(false);
  expect(isProperFraction(-70, 14)).toEqual(false);
  expect(isProperFraction(100, -11)).toEqual(false);
});

// When the fraction is correct
test(`should return true when numerator < denominator`, () => {
  expect(isProperFraction(2, 5)).toEqual(true);
  expect(isProperFraction(1, -4)).toEqual(true);
  expect(isProperFraction(-100, -214)).toEqual(true);
  expect(isProperFraction(-1502, 4000)).toEqual(true);
  expect(isProperFraction(18, 32)).toEqual(true);
});
