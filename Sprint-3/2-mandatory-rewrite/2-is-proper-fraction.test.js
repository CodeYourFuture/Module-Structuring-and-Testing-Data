const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions:
test("should return false for an improper fraction", () => {
  expect(isProperFraction(5, 3)).toEqual(false);
})

// Case 3: Identify Negative Fractions:
test("Should return true for a negative proper fraction", () => {
  expect(isProperFraction(-1, 2)).toEqual(true);
})

test("Should return false for a negative improper fraction", () => {
  expect(isProperFraction(-3, 2)).toEqual(false);
})

// Case 4: Identify Equal Numerator and Denominator:
test("Should return false for equal numerator and denominator", () => {
  expect(isProperFraction(3, 3)).toEqual(false);
})
