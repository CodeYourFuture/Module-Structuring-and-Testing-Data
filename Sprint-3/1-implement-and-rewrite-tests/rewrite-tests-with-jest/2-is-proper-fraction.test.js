// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

test("returns false when denominator is zero", () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

test("returns true for a positive proper fraction", () => {
  expect(isProperFraction(1, 2)).toEqual(true);
});

test("returns true when numerator is negative and denominator is positive", () => {
  expect(isProperFraction(-1, 2)).toEqual(true);
});

test("returns true when numerator is positive and denominator is negative", () => {
  expect(isProperFraction(1, -2)).toEqual(true);
});

test("returns true when both numerator and denominator are negative", () => {
  expect(isProperFraction(-1, -2)).toEqual(true);
});

test("returns true when numerator is zero and denominator is non-zero", () => {
  expect(isProperFraction(0, 5)).toEqual(true);
});

test("returns false when numerator and denominator are equal", () => {
  expect(isProperFraction(2, 2)).toEqual(false);
});

test("returns false when numerator is greater than denominator", () => {
  expect(isProperFraction(3, 2)).toEqual(false);
});

test("returns false for a negative improper fraction", () => {
  expect(isProperFraction(-3, 2)).toEqual(false);
});