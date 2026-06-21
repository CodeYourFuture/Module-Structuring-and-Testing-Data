// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

describe("isProperFraction", () => {
  test("returns true when numerator is zero", () => {
    expect(isProperFraction(0, 4)).toEqual(true);
  });

  test("returns false when denominator is zero", () => {
    expect(isProperFraction(4, 0)).toEqual(false);
  });

  test("returns true for proper positive fractions", () => {
    expect(isProperFraction(4, 7)).toEqual(true);
  });

  test("returns false for improper fractions", () => {
    expect(isProperFraction(7, 4)).toEqual(false);
  });

  test("handles proper negative fractions", () => {
    expect(isProperFraction(-4, 7)).toEqual(true);
    expect(isProperFraction(4, -7)).toEqual(true);
  });

  test("handles improper negative fractions", () => {
    expect(isProperFraction(-7, 4)).toEqual(false);
    expect(isProperFraction(7, -4)).toEqual(false);
  });

  test("returns false when numerator equals denominator", () => {
    expect(isProperFraction(4, 4)).toEqual(false);
  });
});
