// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: denominator is zero
test('should return false when denominator is zero', () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

// Case: proper fractions
test('should return true when the fraction is proper', () => {
  expect(isProperFraction(1, 2)).toEqual(true);
  expect(isProperFraction(-1, 2)).toEqual(true);
});

// Case: improper fractions
test('should return false when the fraction is improper', () => {
  expect(isProperFraction(2, 1)).toEqual(false);
  expect(isProperFraction(3, 3)).toEqual(false);
});

// Case: numerator is zero
test('should return true when numerator is zero', () => {
  expect(isProperFraction(0, 5)).toEqual(true);
});
