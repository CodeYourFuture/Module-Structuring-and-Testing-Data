// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
  expect(isProperFraction(-1, 0)).toEqual(false);
  expect(isProperFraction(0, 0)).toEqual(false);  
});

test(`should return true when the absolute value of the numerator is less than the absolute value of the denominator`, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
  expect(isProperFraction(-1, 2)).toEqual(true);
  expect(isProperFraction(1, -2)).toEqual(true);
  expect(isProperFraction(-1, -2)).toEqual(true);
}); 

test(`should return false when the absolute value of the numerator is greater than or equal to the absolute value of the denominator`, () => {
  expect(isProperFraction(2, 1)).toEqual(false);
  expect(isProperFraction(-2, 1)).toEqual(false);
  expect(isProperFraction(2, -1)).toEqual(false);
  expect(isProperFraction(-2, -1)).toEqual(false);
  expect(isProperFraction(5, 0)).toEqual(false);
  expect(isProperFraction(-5, 0)).toEqual(false);
});

test(`should return true when the numerator is zero and the denominator is non-zero`, () => {
  expect(isProperFraction(0, 5)).toEqual(true);
  expect(isProperFraction(0, -5)).toEqual(true);
});  

