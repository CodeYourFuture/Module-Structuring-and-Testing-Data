// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.


// Category 1: Numerator is zero
test("should return true when numerator is zero and denominator is positive", () => {
  expect(isProperFraction(0, 1)).toBe(true);
});
test("should return true when numerator is zero and denominator is negative", () => {
  expect(isProperFraction(0, -1)).toBe(true);
});

// Category 2: Proper fractions (numerator < denominator)
test("should return true when numerator is less than denominator", () => {
  expect(isProperFraction(1, 2)).toBe(true);
  expect(isProperFraction(3, 5)).toBe(true);
});

// Category 3: Improper fractions (numerator >= denominator)
test("should return false when numerator is greater than or equal to denominator", () => {
  expect(isProperFraction(2, 1)).toBe(false);
  expect(isProperFraction(5, 5)).toBe(false);
});

// Category 4: Denominator is zero
test("should return false when denominator is zero", () => {
  expect(isProperFraction(1, 0)).toBe(false);
});