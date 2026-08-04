// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Denominator is zero
test("should return false when denominator is zero", () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

// Proper fractions
test("should return true when numerator is less than denominator", () => {
  expect(isProperFraction(1, 2)).toEqual(true);
  expect(isProperFraction(2, 4)).toEqual(true);
  expect(isProperFraction(15, 30)).toEqual(true);
});

// Numerator is zero
test("should return true when numerator is zero", () => {
  expect(isProperFraction(0, 9)).toEqual(true);
});

// Equal numerator and denominator
test("should return false when numerator is equal to denominator", () => {
  expect(isProperFraction(5, 5)).toEqual(false);
});

// Numerator is greater than denominator
test("should return false when numerator is greater than denominator", () => {
  expect(isProperFraction(6, 3)).toEqual(false);
  expect(isProperFraction(10, 4)).toEqual(false);
});