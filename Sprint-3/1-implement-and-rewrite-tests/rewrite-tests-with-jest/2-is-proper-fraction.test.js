// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return true when numerator is zero`, () => {
  expect(isProperFraction(0, -4)).toEqual(true);
  expect(isProperFraction(0, 1)).toEqual(true);
});
test("should return false when denominator is zero", () => {
  expect(isProperFraction(1, 0)).toEqual(false);
  expect(isProperFraction(10, 0)).toEqual(false);
  expect(isProperFraction(-2, 0)).toEqual(false);
  expect(isProperFraction(-1, 0)).toEqual(false);
  expect(isProperFraction(1, 0)).toEqual(false);
});

test("should return false when denominator and numerator have both the same negative and positive integer", () => {
  expect(isProperFraction(-1, 1)).toEqual(false);
  expect(isProperFraction(1, -1)).toEqual(false);
});

test(`should return true when denominator is > numerator `, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
  expect(isProperFraction(1, 10000)).toEqual(true);

  expect(isProperFraction(1e2, 1e3)).toEqual(true);
  expect(isProperFraction(-1, 2)).toEqual(true);
});

test("should return false when denominator < numerator", () => {
  expect(isProperFraction(1e4, 1)).toEqual(false);
  expect(isProperFraction(100, 2)).toEqual(false);
});
