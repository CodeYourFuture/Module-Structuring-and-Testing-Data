const { isProperFraction } = require('./is-proper-fraction');

test("Test to see if fractions are proper", () => {
    expect(isProperFraction(2, 3)).toBe(true);
    expect(isProperFraction(5, 2)).toBe(false);
    expect(isProperFraction(3, 2)).toBe(false);
    expect(() => isProperFraction(3, 0)).toThrow("Error (Denominator cannot be zero)");
    expect(isProperFraction(-4, 7)).toBe(true);
    expect(isProperFraction(3, 3)).toBe(false);
});