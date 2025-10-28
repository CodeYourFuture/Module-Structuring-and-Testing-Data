const isProperFraction = require("../implement/2-is-proper-fraction");

// Case 1: Proper fraction
test("should return true for a proper fraction (numerator < denominator)", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});
//

// Case 2: Improper fraction
test("should return false for an improper fraction (numerator > denominator)", () => {
  expect(isProperFraction(5, 2)).toEqual(false);
});

// Case 3: Negative fraction
test("should return true for a negative proper fraction (numerator < denominator)", () => {
  expect(isProperFraction(-4, 7)).toEqual(true);
});

// Case 4: Numerator equal to denominator
test("should return false when numerator equals denominator", () => {
  expect(isProperFraction(3, 3)).toEqual(false);
});

// Optional: Zero numerator
test("should return true when numerator is zero", () => {
  expect(isProperFraction(0, 5)).toEqual(true);
});

// Case 5: Negative denominator
test("should return true when denominator is negative and proper", () => {
  expect(isProperFraction(2, -5)).toEqual(true);
});
