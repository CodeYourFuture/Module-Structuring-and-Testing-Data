const isProperFraction = require("./2-is-proper-fraction");


test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

test("should return false for an improper fraction", () => {
  expect(isProperFraction(5, 3)).toEqual(false);
  expect(isProperFraction(6, 6)).toEqual(false);  // Equal numerator and denominator
});

test("should return true for a negative proper fraction", () => {
  expect(isProperFraction(-2, 3)).toEqual(true);c
});



test("should return false for equal numerator and denominator (improper fraction)", () => {
  expect(isProperFraction(5, 5)).toEqual(false);  // This is an improper fraction
  expect(isProperFraction(-5, -5)).toEqual(false); // This is an improper fraction too
});

test("should return false for a fraction with zero denominator", () => {
  expect(() => isProperFraction(2, 0)).toThrow("Denominator cannot be zero");
});

test("should return true for a fraction with zero numerator", () => {
  expect(isProperFraction(0, 3)).toEqual(true);  // 0/3 is a valid proper fraction
});



