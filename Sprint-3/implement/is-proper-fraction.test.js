const isProperFraction = require('./is-proper-fraction.js');

describe('isProperFraction', () => {
    test('should return true for a proper fraction (numerator < denominator)', () => {
        expect(isProperFraction(2, 3)).toBe(true);
        expect(isProperFraction(-4, 7)).toBe(true);
    });

    test('should return false for an improper fraction (numerator > denominator)', () => {
        expect(isProperFraction(5, 2)).toBe(false);
        expect(isProperFraction(-8, 5)).toBe(false);
    });

    test('should return false for equal numerator and denominator', () => {
        expect(isProperFraction(3, 3)).toBe(false);
        expect(isProperFraction(-4, -4)).toBe(false);
    });

    test('should throw an error for a zero denominator', () => {
        expect(() => isProperFraction(3, 0)).toThrow("Denominator cannot be zero");
        expect(() => isProperFraction(-5, 0)).toThrow("Denominator cannot be zero");
    });

    test('should handle edge cases with small fractions', () => {
        expect(isProperFraction(1, 1000)).toBe(true);  
        expect(isProperFraction(1000, 1)).toBe(false); 
    });

    test('should handle fractions with negative denominators', () => {
        expect(isProperFraction(3, -4)).toBe(true);
        expect(isProperFraction(-5, -2)).toBe(false);
    });
});
