// isProperFraction.test.js
const isProperFraction = require('./isProperFraction');

describe('isProperFraction', () => {
    test('returns true for proper fractions', () => {
        expect(isProperFraction(3, 4)).toBe(true); // Numerator < Denominator
        expect(isProperFraction(-2, 5)).toBe(true); // Numerator < Denominator, negative
    });

    test('returns false for improper fractions', () => {
        expect(isProperFraction(5, 3)).toBe(false); // Numerator > Denominator
        expect(isProperFraction(4, 4)).toBe(false); // Numerator = Denominator
    });

    test('throws an error for zero denominator', () => {
        expect(() => isProperFraction(3, 0)).toThrow("Denominator cannot be zero");
    });

    test('handles negative denominators correctly', () => {
        expect(isProperFraction(3, -5)).toBe(true); // Numerator < Denominator
        expect(isProperFraction(5, -2)).toBe(false); // Numerator > Denominator
    });
});
