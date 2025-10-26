// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions:
test("returns false for an improper fraction", () => {
  expect(isProperFraction(5, 2)).toEqual(false);
});
// Case 3: Identify Negative Fractions:
test("returns true for a negative proper fraction( absolute value of the numerator is less than the denominator)", () => {
  expect(isProperFraction(-4, 7)).toEqual(true);
});
// Case 4: Identify Equal Numerator and Denominator:
test("returns false when numerator equals denominator", () => {
  expect(isProperFraction(9, 9)).toEqual(false);
});
