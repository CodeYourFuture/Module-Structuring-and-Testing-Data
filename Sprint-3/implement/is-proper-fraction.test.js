// is-proper-fraction.test.js
const isProperFraction = require("./is-proper-fraction");

describe("isProperFraction", () => {
  it("should return true for a proper fraction with positive numerator and denominator (e.g., 3/4)", () => {
    expect(isProperFraction(3, 4)).toBe(true);
  });

  it("should return false for an improper fraction with positive numerator and denominator (e.g., 5/4)", () => {
    expect(isProperFraction(5, 4)).toBe(false);
  });

  it("should return true for a proper fraction with negative numerator (e.g., -3/4)", () => {
    expect(isProperFraction(-3, 4)).toBe(true);
  });

  it("should return false for an improper fraction with negative denominator (e.g., 5/-4)", () => {
    expect(isProperFraction(5, -4)).toBe(false);
  });

  it("should return true for a proper fraction with both negative numerator and denominator (e.g., -3/-4)", () => {
    expect(isProperFraction(-3, -4)).toBe(true);
  });

  it("should throw an error when the denominator is zero", () => {
    expect(() => isProperFraction(1, 0)).toThrow("Denominator cannot be zero");
  });

  it("should return false for an improper fraction with equal numerator and denominator (e.g., 4/4)", () => {
    expect(isProperFraction(4, 4)).toBe(false);
  });
});
