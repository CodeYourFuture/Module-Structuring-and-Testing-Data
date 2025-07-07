
const cardValidation = require("./creditCardValidation");

describe('cardValidation', () => {

    test('should return false if card number is not 16 digits long', () => {
        expect(cardValidation('123456789012345')).toBe(false);
        expect(cardValidation('12345678901234567')).toBe(false);
        expect(cardValidation('1234567890123456')).toBe(true);
    });

    test('should return false if card number contains non-digit characters', () => {
        expect(cardValidation('123456789012345A')).toBe(false);
        expect(cardValidation('1234-56789012345')).toBe(false);
        expect(cardValidation('1234567890123456')).toBe(true);
    });

    test('should return false if card number has less than 2 unique digits', () => {
        expect(cardValidation('1111111111111111')).toBe(false);
        expect(cardValidation('1212121212121212')).toBe(true);
    });

    test('should return false if the last digit is odd', () => {
        expect(cardValidation('1234567890123457')).toBe(false);
        expect(cardValidation('1234567890123456')).toBe(true);
    });

    test('should return false if the sum of digits is less than or equal to 16', () => {
        expect(cardValidation('1111111111111111')).toBe(false);
        expect(cardValidation('1234567890123456')).toBe(true);
    });

    test('should return true for a fully valid card number', () => {
        expect(cardValidation('1234567890123456')).toBe(true);
    });

    test('should handle card numbers with spaces correctly', () => {
        expect(cardValidation('1234 5678 9012 3456')).toBe(true);
        expect(cardValidation('1234 5678 9012 3457')).toBe(false);
    });

    test('should return false for all zeros', () => {
        expect(cardValidation('0000000000000000')).toBe(false);
    });

    test('should return false if sum of digits is exactly 16', () => {
        expect(cardValidation('0000000000000088')).toBe(false);
    });
});
