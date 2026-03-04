// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

test("should return false when absolute numerator is greater than or equal to absolute denominator", () => {
  expect(isProperFraction(2, 1)).toEqual(false);
});

test("should return true when absolute numerator is less than absolute denominator", () => {
  expect(isProperFraction(1, 2)).toEqual(true);
});

test("should correctly handle negative numbers using absolute values", () => {
  expect(isProperFraction(-1, -2)).toEqual(true);
});
