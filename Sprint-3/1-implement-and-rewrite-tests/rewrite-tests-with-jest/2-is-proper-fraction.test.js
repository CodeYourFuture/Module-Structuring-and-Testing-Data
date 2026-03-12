// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.


test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});
test(`Should return true when numerator is zero`, () => {
  expect(isProperFraction(0, 5)).toEqual(true);
});
test(`should return true when denominator is greater than numerator`, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
});
test(`should return false when numerator is greater than denominator`, () => {
  expect(isProperFraction(5, 4)).toEqual(false);
});
test(`should return false when numerator is equals to denominator`, () => {
  expect(isProperFraction(3, 3)).toEqual(false);
});
test("should return true when abs(numerator) < abs(denominator)", () => {
  expect(isProperFraction(-1, 2)).toEqual(true);
  expect(isProperFraction(1, -2)).toEqual(true);
  expect(isProperFraction(-1, -2)).toEqual(true);
});
