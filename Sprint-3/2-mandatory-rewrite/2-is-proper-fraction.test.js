const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions:
test("Should be able to identify Improper fractions (23/3)", () => {
  expect(isProperFraction(23, 3)).toEqual(false);
});

// Case 3: Identify Negative Fractions:
test("Should be able to identify Negative fractions (-20/21)", () => {
  expect(isProperFraction(-20, 21)).toEqual(true);
});

// Case 4: Identify Equal Numerator and Denominator:
test("Should be able to Identify equal Numerator and Denominator (3/3) ", () => {
  expect(isProperFraction(3, 3)).toEqual(false);
});
