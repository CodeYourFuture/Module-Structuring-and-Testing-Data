// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Case 1: Proper fractions (numerator < denominator)
test("should return true when numerator is less than denominator", () => {
  expect(isProperFraction(1, 2)).toEqual(true);
  expect(isProperFraction(3, 4)).toEqual(true);
  expect(isProperFraction(0, 5)).toEqual(true);
});

// Case 2: Improper fractions (numerator >= denominator)
test("should return false when numerator is greater than or equal to denominator", () => {
  expect(isProperFraction(2, 1)).toEqual(false);
  expect(isProperFraction(4, 3)).toEqual(false);
  expect(isProperFraction(5, 5)).toEqual(false);
});

// Case 3: Negative numbers
test("should handle negative numbers", () => {
  expect(isProperFraction(-1, 2)).toEqual(true);
  expect(isProperFraction(1, -2)).toEqual(true);
  expect(isProperFraction(-3, -4)).toEqual(true);
});

// Case 4: Denominator is zero
test("should return false when denominator is zero", () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});
