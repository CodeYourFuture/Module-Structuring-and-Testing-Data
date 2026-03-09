// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

//Case 1: denominator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
  expect(isProperFraction(-1, 0)).toEqual(false);
  expect(isProperFraction(0, 0)).toEqual(false);
  expect(isProperFraction(3848473, 0)).toEqual(false);
});

//Case 2: numerator is 0 but denominator is not 0
test(`should return true when numerator is zero but denominator is not 0`, () => {
  expect(isProperFraction(0, 1)).toEqual(true);
  expect(isProperFraction(0, -100)).toEqual(true);
  expect(isProperFraction(0, 1000)).toEqual(true);
});

//Case 3: Absolute values of numerator and denominator are equal
test(`should return false when numerator and denominator have equal absolute values`, () => {
  expect(isProperFraction(1, 1)).toEqual(false);
  expect(isProperFraction(-181, 181)).toEqual(false);
  expect(isProperFraction(839984, 839984)).toEqual(false);
  expect(isProperFraction(-1211, -1211)).toEqual(false);
});

//Case 4: Absolute value of numerator is less than absolute value of denominator
test(`should return true when absolute numerator is less than absolute denominator`, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
  expect(isProperFraction(1, -2)).toEqual(true);
  expect(isProperFraction(-2, -6)).toEqual(true);
  expect(isProperFraction(-0, -1000)).toEqual(true);
});

//Case 5: Absolute value of numerator is greater than absolute value of denominator
test(`should return false when absolute numerator is greater than absolute denominator`, () => {
  expect(isProperFraction(-6, -2)).toEqual(false);
  expect(isProperFraction(5, 3)).toEqual(false);
  expect(isProperFraction(-25, 3)).toEqual(false);
});
