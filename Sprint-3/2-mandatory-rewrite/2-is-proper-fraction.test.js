const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

test("should return false for an improper fraction", () => {
  expect(isProperFraction(5, 3)).toEqual(false);
});

test("should return true for a proper negative fraction", () => {
  expect(isProperFraction(-2, 3)).toEqual(true);
});

test("should return false for an improper negative fraction", () => {
  expect(isProperFraction(-5, 3)).toEqual(false);
});

test("should return false for equal numerator and denominator", () => {
  expect(isProperFraction(4, 4)).toEqual(false);
});

test("should return false for negative equal numerator and denominator", () => {
  expect(isProperFraction(-4, -4)).toEqual(false);
});
