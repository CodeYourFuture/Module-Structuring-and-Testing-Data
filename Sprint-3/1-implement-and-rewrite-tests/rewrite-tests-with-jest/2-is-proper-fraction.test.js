const isProperFraction = require("../implement/2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions:
test("should return false for improper fractions (numerator >= denominator)", () => {
  expect(isProperFraction(5, 2)).toEqual(false);  // 5/2
  expect(isProperFraction(7, 3)).toEqual(false);  // 7/3
});

// Case 3: Identify Negative Fractions:
test("should correctly handle negative fractions using absolute value of numerator", () => {
  expect(isProperFraction(-4, 7)).toEqual(true);  // |−4| < 7 → proper
  expect(isProperFraction(-5, 2)).toEqual(false); // |−5| >= 2 → improper
});

// Case 4: Identify Equal Numerator and Denominator:
test("should return false when numerator equals denominator", () => {
  expect(isProperFraction(3, 3)).toEqual(false);  // 3/3
  expect(isProperFraction(-6, -6)).toEqual(false); // -6/-6
});
