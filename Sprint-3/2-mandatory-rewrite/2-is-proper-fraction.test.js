const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

test("should return false for a improper fraction", () => {
  expect(isProperFraction(5, 2)).toEqual(false);
});

test("should return true for a negative fraction", () => {
  expect(isProperFraction(-4, 7)).toEqual(true);
});

test("should return false for an equal fraction", () => {
  expect(isProperFraction(3, 3)).toEqual(false);
});

test("should return true for an equal fraction", () => {
  expect(isProperFraction(0, 3)).toEqual(true);
});
