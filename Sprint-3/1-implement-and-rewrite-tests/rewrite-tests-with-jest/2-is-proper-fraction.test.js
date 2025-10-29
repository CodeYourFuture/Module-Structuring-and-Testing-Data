// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

test("should return true for a proper fractions", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
  expect(isProperFraction(1, 5)).toEqual(true);
  expect(isProperFraction(3, 7)).toEqual(true);
});

// Case 2: Identify Improper Fractions:
test("should return false for improper fractions", () => {
  expect(isProperFraction(7, 3)).toEqual(false);
  expect(isProperFraction(-12, 5)).toEqual(false);
  expect(isProperFraction(8, 4)).toEqual(false);
})

// Case 3: Identify Negative Fractions:
test("should return true for negative fractions", () => {
  expect(isProperFraction(-4, 9)).toEqual(true);
  expect(isProperFraction(-4, -10)).toEqual(true);
  expect(isProperFraction(3, -9)).toEqual(true);
})

// Case 4: Identify Equal Numerator and Denominator:
test("should return false for equal numerator and denominator", () => {
  expect(isProperFraction(3, 3)).toEqual(false);
  expect(isProperFraction(8, 8)).toEqual(false);
  expect(isProperFraction(-4, -4)).toEqual(false);
})