const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

test("should return false for an improper fraction (numerator > denominator)", () => {
  expect(isProperFraction(5, 4)).toEqual(false);
});

test("should return false for negative fractions", () => {
  expect(isProperFraction(-2, 3)).toEqual(false);
  expect(isProperFraction(2, -3)).toEqual(false);
  expect(isProperFraction(-2, -3)).toEqual(false);
});

test("should return false when numerator equals denominator", () => {
  expect(isProperFraction(3, 3)).toEqual(false);
});
