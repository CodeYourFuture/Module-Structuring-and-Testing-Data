function isProperFraction (numerator, denominator) {
    
    if (denominator === 0) {
         return "Denominator cannot be zero" ;
    } else {
        return Math.abs(numerator) < Math.abs(denominator);
    }
}


test('returns true for proper fractions (numerator < denominator)', () => {
        expect(isProperFraction(2, 3)).toBe(true);
        expect(isProperFraction(-2, 5)).toBe(true);
    });

    test('returns false for improper fractions (numerator >= denominator)', () => {
        expect(isProperFraction(5, 2)).toBe(false);
        expect(isProperFraction(3, 3)).toBe(false);
    });

    test('returns "Denominator cannot be zero" for a zero denominator', () => {
        expect(isProperFraction(3, 0)).toBe("Denominator cannot be zero");
        expect(isProperFraction(0, 0)).toBe("Denominator cannot be zero");
    });

    test('handles negative denominators correctly', () => {
        expect(isProperFraction(-3, -4)).toBe(true);
        expect(isProperFraction(6, -5)).toBe(false);
    });