// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions:
test("should return false,for Improper Fractions (4/2) ", () => {
  expect(isProperFraction(4, 2)).toEqual(false);
});

// Case 3: Identify Negative Fractions:
test("should return true for Negative proper fraction", () => {
  expect(isProperFraction(1, -8)).toEqual(true);
});

test("should return true for Negative proper fraction", () => {
  expect(isProperFraction(-7, -9)).toEqual(true);
});

// Case 4: Identify Equal Numerator and Denominator:
test("should return fals for not proper fraction(0/0)", () => {
  expect(isProperFraction(0, 0)).toEqual(false);
});

test("should return fals for not proper fraction(5/5)", () => {
  expect(isProperFraction(5, 5)).toEqual(false);
});
