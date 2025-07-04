const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

test("should return false for a improper fraction", () => {
  expect(isProperFraction(5, 3)).toEqual(false);
});

test("should return true for negative proper fraction", () => {
  expect(isProperFraction(-2, 3)).toEqual(true);
});

test("should return false when numerator equals denominator", () => {
  expect(isProperFraction(2, 2)).toEqual(false);
});
