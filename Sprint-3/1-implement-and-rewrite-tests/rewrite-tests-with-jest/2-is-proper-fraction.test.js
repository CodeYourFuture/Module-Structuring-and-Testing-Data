// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions:
test("should return false for a improper fraction", () => {
  expect(isProperFraction(4, 3)).toEqual(false);
});

// Case 3: Identify Negative Fractions:
test("should return true for a negative numerator proper fraction", () => {
  expect(isProperFraction(-2, 3)).toEqual(true);
});
test("should return true for a negative denominator proper fraction", () => {
  expect(isProperFraction(2, -3)).toEqual(true);
});
test("should return true for both negative numerator and denominator proper fraction", () => {
  expect(isProperFraction(-2, -3)).toEqual(true);
});

// Case 4: Identify Equal Numerator and Denominator:
test("should return false for equal numerator and denominator", () => {
  expect(isProperFraction(2, 2)).toEqual(false);
});