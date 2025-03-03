const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions:
test("should return false for a improper fraction", () => {
  expect(isProperFraction(5, 2)).toEqual(false);
});


// Case 3: Identify Negative Fractions:
test("should return true for a negative fraction", () => {
  expect(isProperFraction(-4, 7)).toEqual(true);
});


// Case 4: Identify Equal Numerator and Denominator:
test("should return false for a equal numerator and denominator", () => {
  expect(isProperFraction(3, 3)).toEqual(false);
});

// Denominator is zero (undefined case)
test("should return false for a fraction with denominator 0", () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

//improper negative fraction with negative denominator
test("should return false for an improper fraction with negative denominator", () => {
  expect(isProperFraction(5, -3)).toEqual(false);
});

