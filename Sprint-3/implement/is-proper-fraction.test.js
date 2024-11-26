const {isProperFraction} = require("./is-proper-fraction");

describe("isProperFraction", () => {
  test("should return true for a proper fraction", () => {
    expect(isProperFraction(2, 3)).toBe(true);
  });

  test("should return false for an improper fraction", () => {
    expect(isProperFraction(5, 2)).toBe(false);
  });

  test("should return true for a negative proper fraction", () => {
    expect(isProperFraction(-4, 7)).toBe(true);
  });

  test("should return false when numerator equals denominator", () => {
    expect(isProperFraction(3, 3)).toBe(false);
  });

  test("should throw error for zero denominator", () => {
    expect(() => {
      isProperFraction(3, 0);
    }).toThrow("Denominator cannot be zero");
  });

  // Additional edge cases
  test("should handle negative denominators", () => {
    expect(isProperFraction(2, -3)).toBe(true);
  });

  test("should handle both negative numerator and denominator", () => {
    expect(isProperFraction(-2, -3)).toBe(true);
  });
});