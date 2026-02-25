// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

test("should return true for valid proper fractions", () => {
  expect(isProperFraction(1, 2)).toEqual(true);
  expect(isProperFraction(3, 10)).toEqual(true);
  expect(isProperFraction(0, 5)).toEqual(true);
});

test("should return false when numerator is equal to or greater than denominator", () => {
  expect(isProperFraction(5, 5)).toEqual(false);
  expect(isProperFraction(10, 3)).toEqual(false);
});

test("should return false when numerator or denominator is negative", () => {
  expect(isProperFraction(-1, 2)).toEqual(false);
  expect(isProperFraction(1, -2)).toEqual(false);
});

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});
