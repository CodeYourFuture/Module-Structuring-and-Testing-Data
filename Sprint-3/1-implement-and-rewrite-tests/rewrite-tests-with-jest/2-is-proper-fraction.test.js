// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero

test(`should return true when numerator < denominator and both are integers`, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
  expect(isProperFraction(3, 9)).toEqual(true);
  expect(isProperFraction(99, 100)).toEqual(true);
});

test(`should return false when denominator = zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
  expect(isProperFraction(5, 0)).toEqual(false);
});

test(`should return false when numerator = zero`, () => {
  expect(isProperFraction(0, 5)).toEqual(false);
  expect(isProperFraction(0, 7)).toEqual(false);
});

test(`should return false when numerator > denominator`, () => {
  expect(isProperFraction(3, 2)).toEqual(false);
  expect(isProperFraction(9, 3)).toEqual(false);
  expect(isProperFraction(36, 7)).toEqual(false);
});

test(`should return false when either numerator or denominator or both are float numbers`, () => {
  expect(isProperFraction(1.5, 2)).toEqual(false);
  expect(isProperFraction(6, 7.1)).toEqual(false);
  expect(isProperFraction(3.56, 2.4)).toEqual(false);
});

test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});
