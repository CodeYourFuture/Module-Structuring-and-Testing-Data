// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

test("should return true for a proper fraction, including negatives", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
  expect(isProperFraction(-2, 3)).toEqual(true);
  expect(isProperFraction(4, -5)).toEqual(true);
  expect(isProperFraction(-4, -5)).toEqual(true);
});

// Case 2: Identify Improper Fractions:
test("should return false for an improper fraction, including negatives", () => {
  expect(isProperFraction(5, 4)).toEqual(false); //  numerator greater than denominator
  expect(isProperFraction(5, -4)).toEqual(false); // negative denominator
  expect(isProperFraction(-5, 4)).toEqual(false); // negative numerator
  expect(isProperFraction(-5, -4)).toEqual(false); // both negative 
});

// Case 3: Identify Negative Fractions:
test("should return true for a negative fraction", () => {
  expect(isProperFraction(-3, 4)).toEqual(true);
});

// Case 4: Identify Equal Numerator and Denominator:
test("should return false for equal numerator and denominator", () => {
  expect(isProperFraction(3, 3)).toEqual(false);
});
