const isProperFraction = require("../implement/2-is-proper-fraction");

describe("isProperFraction", () => {
  test("returns true when numerator is smaller than denominator", () => {
    expect(isProperFraction(1, 2)).toBe(true);
    expect(isProperFraction(3, 4)).toBe(true);
  });

  test("returns false when numerator equals denominator", () => {
    expect(isProperFraction(5, 5)).toBe(false);
  });

  test("returns false when numerator is larger than denominator", () => {
    expect(isProperFraction(7, 3)).toBe(false);
  });

  test("returns true when numerator is zero", () => {
    expect(isProperFraction(0, 5)).toBe(true);
  });

  test("returns false when denominator is zero", () => {
    expect(isProperFraction(1, 0)).toBe(false);
  });

  test("works with negative numbers", () => {
    expect(isProperFraction(-1, 2)).toBe(true);
    expect(isProperFraction(1, -2)).toBe(true);
    expect(isProperFraction(-3, -2)).toBe(false);
  });
});