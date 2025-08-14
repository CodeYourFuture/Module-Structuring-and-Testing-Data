const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions:

test("should return false for fraction where Numerator is grater than Denominator", () => {
  expect(isProperFraction(10, 2)).toEqual(false);
});

// Case 3: Identify Negative Fractions:
test("should return true for fraction where Numerator and Denominator are negative integer as long as Denominator is greater than Numerator", () => {
  expect(isProperFraction(-6, -3)).toEqual(true);
});

// Case 4: Identify Equal Numerator and Denominator:
test("should return false for fraction where Numerator is equal to Denominator", () => {
  expect(isProperFraction(50, 50)).toEqual(false);
});
//Stretch Case 1 : Identify Decimal Numerator
test("should return False for fraction where Numerator is decimal integer", () => {
  expect(isProperFraction(2.2, 4)).toEqual(false);
});
//Stretch Case 2
test("should return false where Denominator isn't provided", () => {
  expect(isProperFraction(5)).toEqual(false);
});
