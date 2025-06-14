const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions:
test("should false for a improper fraction", () => {
  expect(isProperFraction(7, 3)).toEqual(false);
});
// Case 3: Identify Negative Fractions:
test("should true for a proper negative fraction", () => {
  expect(isProperFraction(-1, 3)).toEqual(true);
});
test("should false for a improper negative fraction", () => {
  expect(isProperFraction(-7, 3)).toEqual(false);
});
// Case 4: Identify Equal Numerator and Denominator:
test("should false for an equal Numerator and Denominator", () => {
  expect(isProperFraction(4, 4)).toEqual(false);
});
