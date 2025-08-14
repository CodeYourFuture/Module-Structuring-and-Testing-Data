const isProperFraction = require("./2-is-proper-fraction");


test("should return false for improper fraction (5/2)", () => {
  expect(isProperFraction(5, 2)).toEqual(false);
});


test("should return true for negative proper fraction (-4/7)", () => {
  expect(isProperFraction(-4, 7)).toEqual(true);
});


test("should return false for equal numerator and denominator (3/3)", () => {
  expect(isProperFraction(3, 3)).toEqual(false);
});


test("should return true for both negative proper fraction (-8/-10)", () => {
  expect(isProperFraction(-8, -10)).toEqual(true);
});