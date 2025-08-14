const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions:

test("should return false for a Improper fraction", () => {
  expect(isProperFraction(4, 3)).toEqual(false);
});

// Case 3: Identify Negative Fractions:

test("should return true for a Negative fraction", () => {
  expect(isProperFraction(-4, 3)).toEqual(false);
  expect(isProperFraction(-3, 4)).toEqual(true);
});

// Case 4: Identify Equal Numerator and Denominator:
test("should return false for Equal Numerator and Denominator", () => {
  expect(isProperFraction(3, 3)).toEqual(false);
});
