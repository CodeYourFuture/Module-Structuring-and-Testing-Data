const isProperFraction = require("./is-proper-fraction");

describe("Proper Fractions", () => {
  it("should always have a numerator less than the deonimator", () => {
    expect(isProperFraction(2, 3)).toEqual(true);
  });
  it("should return false if the numerator is greater than or equal to the denominator", () => {
    expect(isProperFraction(5, 2)).toEqual(false);
  });
  it("should throw an error if the denominator is zero", () => {
    expect(() => isProperFraction(3, 0)).toThrow("Denominator cannot be zero");
  });
  it("should return true if the numerator is negative", () => {
    expect(isProperFraction(-4, 7)).toEqual(true);
  });
  it("should return false if the numerator and deonominator are equal", () => {
    expect(isProperFraction(3, 3)).toEqual(false);
  });
});
