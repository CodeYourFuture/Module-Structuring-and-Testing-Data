// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
  expect(isProperFraction(2, 0)).toEqual(false);
  
});

// Case 2: Denominator is greater than numerator
test(`should return true when denominator is greater than numerator`, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
  expect(isProperFraction(2, 4)).toEqual(true);
  expect(isProperFraction(3, 6)).toEqual(true);
  expect(isProperFraction(4, 8)).toEqual(true);
  expect(isProperFraction(5, 10)).toEqual(true);
});

// Case 3: Denominator is less than numerator
test(`should return false when denominator is less than numerator`, () => {
  expect(isProperFraction(2, 1)).toEqual(false);
  expect(isProperFraction(4, 2)).toEqual(false);
  expect(isProperFraction(6, 3)).toEqual(false);
  expect(isProperFraction(8, 4)).toEqual(false);
  expect(isProperFraction(10, 5)).toEqual(false);
});
