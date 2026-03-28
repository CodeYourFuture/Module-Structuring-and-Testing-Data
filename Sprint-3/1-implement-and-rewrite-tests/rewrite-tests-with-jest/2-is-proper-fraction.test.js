// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// denominator is zero
test("should return false when denominator is zero", () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

// proper fraction (numerator < denominator)
test("should return true when numerator < denominator", () => {
  expect(isProperFraction(1, 2)).toEqual(true);
});

// improper fraction (numerator > denominator)
test("should return false when numerator > denominator", () => {
  expect(isProperFraction(5, 3)).toEqual(false);
});

// equal numbers
test("should return false when numerator === denominator", () => {
  expect(isProperFraction(4, 4)).toEqual(false);
});

// numerator is zero
test("should return true when numerator is zero and denominator is positive", () => {
  expect(isProperFraction(0, 5)).toEqual(true);
});

// negative numerator
test("should return false when numerator is negative", () => {
  expect(isProperFraction(-2, 4)).toEqual(false);
});

// negative denominator
test("should return false when denominator is negative", () => {
  expect(isProperFraction(5, -4)).toEqual(false);
});

// both negative
test("should return false when both numerator and denominator are negative", () => {
  expect(isProperFraction(-3, -5)).toEqual(false);
});