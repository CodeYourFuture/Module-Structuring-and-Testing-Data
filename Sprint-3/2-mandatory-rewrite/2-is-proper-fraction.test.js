const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

test("should return true for a proper fraction", () => {
  expect(isProperFraction(0, 7)).toEqual(true);
});

// Case 2: Identify Improper Fractions:
test("should return false for an improper fraction", () => {
  expect(isProperFraction(5, 2)).toEqual(false);
});

test("should return false for an improper fraction", () => {
  expect(isProperFraction(7, 0)).toEqual(false);
});

// Case 3: Identify Negative Fractions:
test("should return true for a proper fraction", () => {
  expect(isProperFraction(-4, 7)).toEqual(true);
});

test("should return false for an improper fraction", () => {
  expect(isProperFraction(-14, 7)).toEqual(false);
});

// Case 4: Identify Equal Numerator and Denominator:
test("should return false for an improper fraction", () => {
  expect(isProperFraction(3, 3)).toEqual(false);
});
