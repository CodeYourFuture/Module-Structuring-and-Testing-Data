const isProperFraction = require('./isProperFraction');

// i think i can improve these maybe but lets run it against the 1st iteration of the function (i already got a better slicker approach in mind)
describe('isProperFraction', () => {
    test('identifies a basic proper fraction', () => {
        expect(isProperFraction(2, 3)).toBe(true);
    });

    test('identifies an improper fraction', () => {
        expect(isProperFraction(5, 2)).toBe(false);
    });

    test('throws error for zero denominator', () => {
        expect(() => isProperFraction(3, 0)).toThrow('Denominator cannot be zero'); //BUG v1 does not handle the user input error of a zero denominator. test fails.
    });

    test('handles negative proper fraction', () => {
        expect(isProperFraction(-4, 7)).toBe(true);
    });

    test('returns false when numerator equals denominator', () => {
        expect(isProperFraction(3, 3)).toBe(false);
    });

    test('handles zero numerator', () => {
        expect(isProperFraction(0, 5)).toBe(true);
    });

    test('works with large numbers', () => {
        expect(isProperFraction(99, 100)).toBe(true);
        expect(isProperFraction(100, 99)).toBe(false);
    });

    test('handles negative denominator', () => {
        expect(isProperFraction(2, -7)).toBe(true); //BUG for the test of v1 of the function this fails and returns 'false'.
        expect(isProperFraction(-2, -7)).toBe(true); //on v2 this fails but its !=BUG=! cause i got it wrong it should be changed to 'true' as the input would evaluate to a positive fraction of 2 over 7.
    });
});