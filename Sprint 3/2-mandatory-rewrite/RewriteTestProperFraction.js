const isProperFraction = require("./Rewrite Proper Fraction");

// Test cases
test("should return true for numerator < denominator", () => {
    expect(isProperFraction(1, 2)).toBe(true);
});

test("should return false for numerator == denominator", () => {
    expect(isProperFraction(2, 2)).toBe(false);
});

test("should return false for numerator > denominator", () => {
    expect(isProperFraction(3, 2)).toBe(false);
});
