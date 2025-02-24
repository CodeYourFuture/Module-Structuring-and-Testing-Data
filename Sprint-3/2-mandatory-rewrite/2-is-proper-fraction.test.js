const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions:
test("should return false for an improper fraction (where the numerator is greater than or equal to the denominator)", () => {
expect(isProperFraction(5,2)).toEqual(false);
})
// Case 3: Identify Negative Fractions:
test("should return true for an negative fraction (where the absolute value of the numerator (4) is less than the denominator (7)", () => {
  expect(isProperFraction(-4,7)).toEqual(true);
})

// Case 4: Identify Equal Numerator and Denominator:
test("should return false for an equal fraction (where the the numerator (4) is equal to the denominator (4)", () => {
  expect(isProperFraction(4,4)).toEqual(false);
})