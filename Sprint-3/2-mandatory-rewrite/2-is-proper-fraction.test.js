const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

test("should return false for an improper fraction", () => {
  expect(isProperFraction(5, 3)).toEqual(false);
  expect(isProperFraction(3, 3)).toEqual(false);
});

test("should return true for negative proper fractions", () => {
  expect(isProperFraction(-2, 3)).toEqual(true); 
  expect(isProperFraction(2, -3)).toEqual(true); 
});

test("should return false for negative improper fractions", () => {
  expect(isProperFraction(-5, 3)).toEqual(false); 
  expect(isProperFraction(5, -3)).toEqual(false); 
});

test("should return false for equal numerator and denominator", () => {
  expect(isProperFraction(3, 3)).toEqual(false); 
  expect(isProperFraction(1, 1)).toEqual(false); 
});

