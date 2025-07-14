const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions:
test("should return flase for inproper fraction", () => {
  expect(isProperFraction(256, 40)).toEqual(false);
});
test("should return flase for inproper fraction", () => {
  expect(isProperFraction(8, 4)).toEqual(false);
});
// Case 3: Identify Negative Fractions:
test("should return true for negative fraction (-2,4)", () => {
  expect(isProperFraction(-2, 4)).toEqual(true);
});
test("should return false for negative fraction (-10,-4)", () => {
  expect(isProperFraction(-10, -4)).toEqual(false);
});
// Case 4: Identify Equal Numerator and Denominator:
test("should return flase for inproper fraction", () => {
  expect(isProperFraction(3, 3)).toEqual(false);
});
