// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.
// Example: 1/2 is a proper fraction
test(`should return true for 1/2`, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
});
// Example: 2/1 is not a proper fraction
test(`should return false for 2/1`, () => {
  expect(isProperFraction(2, 1)).toEqual(false);
});
// Example: -1/2 is a proper fraction
test(`should return true for -1/2`, () => {
  expect(isProperFraction(-1, 2)).toEqual(true);
});
// Example: 1/-2 is a proper fraction
test(`should return true for 1/-2`, () => {
  expect(isProperFraction(1, -2)).toEqual(true);
});
// Example: -1/-2 is a proper fraction
test(`should return true for -1/-2`, () => {
  expect(isProperFraction(-1, -2)).toEqual(true);
});
// Example: 0/5 is a proper fraction
test(`should return true for 0/5`, () => {
  expect(isProperFraction(0, 5)).toEqual(true);
});
// Example: 5/0 is not a proper fraction
test(`should return false for 5/0`, () => {
  expect(isProperFraction(5, 0)).toEqual(false);
});
// Example: 5/5 is not a proper fraction
test(`should return false for 5/5`, () => {
  expect(isProperFraction(5, 5)).toEqual(false);
});
// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});     

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});
