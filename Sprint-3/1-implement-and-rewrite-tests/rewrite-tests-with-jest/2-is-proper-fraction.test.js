// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});
 
// special case : numerator is one 
test(` should return true when the numerator is one and denominator is greater than one`, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
});
// special case : denominator is negative to the numerator
test(`should return false when the denominator is negative and the numerator is positive`, () => {
  expect(isProperFraction(1, -2)).toEqual(false);
});

// special case : denominator  is negative to the numerator
test(`should return false when the numerator is negative and the denominator is positive`, () => {
  expect(isProperFraction(-1, 2)).toEqual(false);
});