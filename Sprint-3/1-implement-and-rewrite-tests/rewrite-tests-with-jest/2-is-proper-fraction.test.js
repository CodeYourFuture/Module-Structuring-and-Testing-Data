// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case 1: numerator is zero
test(`should return false when numerator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

// Special case 2: denominator zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(0, 1)).toEqual(false);
});

// Special case 3: both zero
test(`should return false when both are zero`, () => {
  expect(isProperFraction(0, 0)).toEqual(false);
});

// Special case 4: numerator is a negative number
test(`should return false when numerator is negative`, () => {
  expect(isProperFraction(-3, 4)).toEqual(false);
});

// Special case 5: denominator is a negative number
test(`should return false when denominator is negative`, () => {
  expect(isProperFraction(3, -4)).toEqual(false);
});

// Special case 6: numerator -3 and denominator -4 
test(`should return false when numerator -3 and denominator -4`, () => {
  expect(isProperFraction(-3, -4)).toEqual(false);
});

// Special case 7: negative equal values 
test(`should return false when both negative equal values`, () => {
  expect(isProperFraction(-6, -6)).toEqual(false);
});

// Special case 8: equal values 
test(`should return false when both are equal`, () => {
  expect(isProperFraction(5, 5)).toEqual(false);
});

// Special case 9: numerator is a negative number
test(`should return false when numerator is negative`, () => {
  expect(isProperFraction(-3, 4)).toEqual(false);
});

// Non special cases

// Case ase 10: numerator 1 denominator 2
test(`should return false when numerator 1 denominator 2`, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
});

// Case ase 11: numerator 3 denominator 4
test(`should return false when numerator 3 denominator 4`, () => {
  expect(isProperFraction(3, 4)).toEqual(true);
});

// Case ase 12: numerator 5 denominator 8 
test(`should return false when numerator 5 denominator 8`, () => {
  expect(isProperFraction(5, 8)).toEqual(true);
});

// Case ase 13: numerator 7 denominator 4 
test(`should return false when 7 denominator 4`, () => {
  expect(isProperFraction(7, 4)).toEqual(false);
});

// Case ase 14: numerator 9 denominator 5 
test(`should return false when numerator 9 denominator 5`, () => {
  expect(isProperFraction(9, 5)).toEqual(false);
});
