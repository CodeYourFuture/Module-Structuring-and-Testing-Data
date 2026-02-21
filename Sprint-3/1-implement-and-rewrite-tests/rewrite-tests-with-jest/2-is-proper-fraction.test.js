// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");


// Case 1: Denominator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
  expect(isProperFraction(0, 0)).toEqual(false);
});


// Case 2: Numerator is zero
test(`should return true when numerator is zero and denominator is not zero`, () => {
  expect(isProperFraction(0, 5)).toEqual(true);
  expect(isProperFraction(0, -10)).toEqual(true);
});


// Case 3: Positive proper fractions
test(`should return true for positive proper fractions`, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
  expect(isProperFraction(3, 4)).toEqual(true);
});


// Case 4: Positive improper fractions
test(`should return false for positive improper fractions`, () => {
  expect(isProperFraction(5, 2)).toEqual(false);
  expect(isProperFraction(4, 4)).toEqual(false);
});


// Case 5: Negative proper fractions
test(`should return true for negative proper fractions`, () => {
  expect(isProperFraction(-1, 2)).toEqual(true);
  expect(isProperFraction(2, -5)).toEqual(true);
  expect(isProperFraction(-3, -7)).toEqual(true);
});


// Case 6: Negative improper fractions
test(`should return false for negative improper fractions`, () => {
  expect(isProperFraction(-5, 2)).toEqual(false);
  expect(isProperFraction(9, -4)).toEqual(false);
});
