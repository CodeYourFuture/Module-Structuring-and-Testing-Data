const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions:
test("should return true for a proper fraction", () => {
  expect(isProperFraction(0, 0)).toEqual(false);
});

// Case 3: Identify Negative Fractions:
test("should return true for a proper fraction", () => {
  expect(isProperFraction(-1, 4)).toEqual(true);
});

// Case 4: Identify Equal Numerator and Denominator:
test("should return true for a proper fraction", () => {
  expect(isProperFraction(5, 5)).toEqual(false);
});
