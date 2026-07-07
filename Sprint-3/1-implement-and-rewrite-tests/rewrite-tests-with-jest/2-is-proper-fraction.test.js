// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

describe("isProperFraction", () => {
  
  // 1. Positive Proper Fractions
  test("should return true for positive proper fractions (numerator < denominator)", () => {
    expect(isProperFraction(1, 2)).toBe(true);
    expect(isProperFraction(3, 4)).toBe(true);
    expect(isProperFraction(99, 100)).toBe(true);
  });

  // 2. Positive Improper Fractions
  test("should return false for positive improper fractions (numerator >= denominator)", () => {
    expect(isProperFraction(5, 4)).toBe(false);
    expect(isProperFraction(10, 2)).toBe(false);
    expect(isProperFraction(4, 4)).toBe(false); // Exactly 1
  });

  // 3. Zero Cases
  test("should return false when denominator is zero", () => {
    expect(isProperFraction(1, 0)).toBe(false);
    expect(isProperFraction(0, 0)).toBe(false);
  });

  test("should return true when numerator is zero and denominator is non-zero", () => {
    expect(isProperFraction(0, 5)).toBe(true);
    expect(isProperFraction(0, -5)).toBe(true);
  });

  // 4. Negative Fractions
  test("should evaluate proper fractions correctly when negative signs are present", () => {
    expect(isProperFraction(-1, 3)).toBe(true);   // Negative numerator
    expect(isProperFraction(1, -3)).toBe(true);   // Negative denominator
    expect(isProperFraction(-1, -3)).toBe(true);  // Both negative
  });

  test("should evaluate improper fractions correctly when negative signs are present", () => {
    expect(isProperFraction(-5, 4)).toBe(false);  // Magnitude > 1
    expect(isProperFraction(5, -4)).toBe(false);  // Magnitude > 1
    expect(isProperFraction(-4, -4)).toBe(false); // Magnitude = 1
  });

  // 5. Decimals / Floating Point Numbers
  test("should handle decimal inputs using absolute magnitude values", () => {
    expect(isProperFraction(1.5, 3)).toBe(true);
    expect(isProperFraction(4.5, 3)).toBe(false);
  });

});
