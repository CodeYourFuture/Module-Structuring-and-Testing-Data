// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.
// Special case: numerator is zero
test("should Throw new error for abs(denominator) == 0", () => {
  expect(() => isProperFraction(-11, 0)).toThrow("Denominator cannot be zero");
  expect(() => isProperFraction(0, 0)).toThrow("Denominator cannot be zero");
  expect(() => isProperFraction(7, 0)).toThrow("Denominator cannot be zero");
});
// It should return true  when the numerator is 0
test("should return true when abs(numerator) == 0", () => {
  expect(isProperFraction(0, -1)).toEqual(true);
  expect(isProperFraction(0, 3)).toEqual(true);
  expect(isProperFraction(0, -2)).toEqual(true);
});
test("should return true when abs(numerator) < abs(denominator)", () => {
  expect(isProperFraction(-12, -19)).toEqual(true);
  expect(isProperFraction(3, 6)).toEqual(true);
  expect(isProperFraction(17, -71)).toEqual(true);
});
test("should return false when abs(numerator) > abs(denominator)", () => {
  expect(isProperFraction(-180, -109)).toEqual(false);
  expect(isProperFraction(27, 5)).toEqual(false);
  expect(isProperFraction(-29, 17)).toEqual(false);
});
test("should return false when abs(numerator) == abs(denominator)", () => {
  expect(isProperFraction(9, 9)).toEqual(false);
  expect(isProperFraction(-17, -17)).toEqual(false);
  expect(isProperFraction(-15, 15)).toEqual(false);
});
