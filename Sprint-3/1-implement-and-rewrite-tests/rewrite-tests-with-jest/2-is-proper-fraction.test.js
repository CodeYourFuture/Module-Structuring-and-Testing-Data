// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});
test(`should return false when numerator is zero`, () => {
  expect(isProperFraction(0, 1)).toEqual(false);
});
test(`should return false when numerator < denominator `, () => {
  expect(isProperFraction(-1, 2)).toEqual(false);
});
test(`should return false when denominator < numerator`, () => {
  expect(isProperFraction(1, -2)).toEqual(false);
});
test(`should return false when denominator is bigInt`, () => {
  expect(isProperFraction(1, 23443243n)).toEqual(true);
});
test(`should return false when numerator is infinity`, () => {
  expect(isProperFraction(23432434n, 10)).toEqual(false);
});
test(`should return true when denominator is bigger then numerator`, () => {
  expect(isProperFraction(5, 10)).toEqual(true);
});