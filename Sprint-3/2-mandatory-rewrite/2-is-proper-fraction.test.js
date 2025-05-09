const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction (2/3)",() => {
    expect(isProperFraction(2,3)).toBe(true);
});

// Case 2: Identify Improper Fractions:
test("should return true for a improper fraction (3/1)",() => {
    expect(isProperFraction(3,1)).toBe(false);
});

// Case 3: Identify Negative Fractions:
test("should return true for a negative fraction (-3/5)",() => {
    expect(isProperFraction(-3,5)).toBe(true);
});

// Case 4: Identify Equal Numerator and Denominator:
test("should return true for a equal numerator and denominator fraction (5/5)",() => {
    expect(isProperFraction(5,5)).toBe(false);
});

