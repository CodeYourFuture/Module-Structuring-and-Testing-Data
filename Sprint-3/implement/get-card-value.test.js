const getCardValue = require('./get-card-value');

describe('getCardValue', () => {
    test('should return correct value for number cards (2-10)', () => {
        expect(getCardValue('2♠')).toBe(2);
        expect(getCardValue('10♣')).toBe(10);
    });

    test('should return correct value for face cards (J, Q, K)', () => {
        expect(getCardValue('J♦')).toBe(10);
        expect(getCardValue('Q♥')).toBe(10);
        expect(getCardValue('K♠')).toBe(10);
    });

    test('should return 11 for Ace (A)', () => {
        expect(getCardValue('A♠')).toBe(11);
    });

    test('should throw an error for invalid card rank', () => {
        expect(() => getCardValue('Z♠')).toThrow('Invalid card rank');
        expect(() => getCardValue('1♣')).toThrow('Invalid card rank');
    });
});