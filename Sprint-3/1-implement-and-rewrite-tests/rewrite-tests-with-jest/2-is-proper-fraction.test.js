const isProperFraction = require("../implement/2-is-proper-fraction");

test("should return true when numerator is less than denominator", () => {
  expect(isProperFraction(1, 2)).toEqual(true);
  expect(isProperFraction(3, 4)).toEqual(true);
});

test("should return false when numerator is greater than denominator", () => {
  expect(isProperFraction(5, 2)).toEqual(false);
  expect(isProperFraction(10, 3)).toEqual(false);
});

test("should return false when numerator equals denominator", () => {
  expect(isProperFraction(4, 4)).toEqual(false);
});

test("should return true when numerator is zero and denominator is positive", () => {
  expect(isProperFraction(0, 5)).toEqual(true);
});

test("should return false when denominator is zero", () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

test("should return false when numerator and denominator are zero", () => {
  expect(isProperFraction(0, 0)).toEqual(false);
});

test("should return true when numerator is negative and denominator is positive", () => {
  expect(isProperFraction(-1, 6)).toEqual(true);
});

test("should return false when denominator is negative", () => {
  expect(isProperFraction(1, -5)).toEqual(false);
});

test("should return false when both numerator and denominator are negative", () => {
  expect(isProperFraction(-4, -5)).toEqual(false);
});
