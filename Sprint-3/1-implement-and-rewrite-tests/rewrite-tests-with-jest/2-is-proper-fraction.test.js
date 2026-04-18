const isProperFraction = require("../implement/2-is-proper-fraction");

// denominator is zero
test("should return false when denominator is zero", () => {
  expect(isProperFraction(1, 0)).toBe(false);
});

// proper fraction
test("should return true when numerator < denominator", () => {
  expect(isProperFraction(1, 2)).toBe(true);
});

// improper fraction
test("should return false when numerator > denominator", () => {
  expect(isProperFraction(5, 3)).toBe(false);
});

// equal numbers
test("should return false when numerator === denominator", () => {
  expect(isProperFraction(4, 4)).toBe(false);
});

// numerator is zero
test("should return true when numerator is zero and denominator is positive", () => {
  expect(isProperFraction(0, 5)).toBe(true);
});

// negative numerator
test("should return false when numerator is negative", () => {
  expect(isProperFraction(-2, 4)).toBe(false);
});

// negative denominator
test("should return false when denominator is negative", () => {
  expect(isProperFraction(5, -4)).toBe(false);
});

// both negative
test("should return false when both numerator and denominator are negative", () => {
  expect(isProperFraction(-3, -5)).toBe(false);
});
