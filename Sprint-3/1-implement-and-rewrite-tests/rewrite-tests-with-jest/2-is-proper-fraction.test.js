// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

test("should return false for an improper fraction (numerator >= denominator)", () => {
  expect(isProperFraction(5, 2)).toEqual(false);
  expect(isProperFraction(10, 3)).toEqual(false);
  expect(isProperFraction(7, 7)).toEqual(false);
});

test("should return true for a negative proper fraction (|numerator| < denominator)", () => {
  expect(isProperFraction(-4, 7)).toEqual(true);
  expect(isProperFraction(-2, 5)).toEqual(true);
  expect(isProperFraction(-1, 10)).toEqual(true);
});

test("should return false when numerator equals denominator", () => {
  expect(isProperFraction(3, 3)).toEqual(false);
  expect(isProperFraction(1, 1)).toEqual(false);
  expect(isProperFraction(100, 100)).toEqual(false);
});
