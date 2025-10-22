// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions:
test("should return false for an improper fraction", () => {
  expect(isProperFraction(5, 2)).toEqual(false);
});

// Case 3: Identify Negative Fractions:
test("should return true for a negative proper fraction", () => {
  expect(isProperFraction(-4, 7)).toEqual(true);
});
// Case 4: Identify Equal Numerator and Denominator:
test("should return false when numerator equals denominator", () => {
  expect(isProperFraction(3, 3)).toEqual(false);
});

// Case 5: Zero Numerator:
test("should return true for zero numerator", () => {
  expect(isProperFraction(0, 5)).toEqual(true);
});

// Case 6: Zero Denominator:
test("should return false for zero denominator", () => {
  expect(isProperFraction(4, 0)).toEqual(false);
});

// Case 7: Negative Denominator:
test("should return true for negative denominator", () => {
  expect(isProperFraction(3, -5)).toEqual(true);
});