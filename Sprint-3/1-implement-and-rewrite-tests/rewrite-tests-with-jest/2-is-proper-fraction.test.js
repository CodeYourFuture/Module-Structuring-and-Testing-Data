// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

// Proper fraction cases
test(`should return true when numerator is smaller then denominator`, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
  expect(isProperFraction(65, 67)).toEqual(true);
  expect(isProperFraction(1, 1000)).toEqual(true);
  expect(isProperFraction(999, 1000)).toEqual(true);
  expect(isProperFraction(0, 6)).toEqual(true);
});

// Improper fraction cases
test(`should return false when numerator is bigger then denominator`, () => {
  expect(isProperFraction(3, 2)).toEqual(false);
  expect(isProperFraction(65, 60)).toEqual(false);
  expect(isProperFraction(1000, 1)).toEqual(false);
  expect(isProperFraction(2999, 1000)).toEqual(false);
  expect(isProperFraction(11, 10)).toEqual(false);
});
