const getCardValue = require('./get-card-value.js');

describe('getCardValue', () => {
    test('should return the numeric value for cards 2-10', () => {
        expect(getCardValue("2♠")).toBe(2);
        expect(getCardValue("5♦")).toBe(5);
        expect(getCardValue("10♣")).toBe(10);
    });

    test('should return 10 for face cards (J, Q, K)', () => {
        expect(getCardValue("J♠")).toBe(10);
        expect(getCardValue("Q♥")).toBe(10);
        expect(getCardValue("K♦")).toBe(10);
    });

    test('should return 11 for Ace (A)', () => {
        expect(getCardValue("A♠")).toBe(11);
    });

    test('should throw an error for invalid card ranks', () => {
        expect(() => getCardValue("1♠")).toThrow("Invalid card rank");
        expect(() => getCardValue("Z♣")).toThrow("Invalid card rank");
        expect(() => getCardValue("11♦")).toThrow("Invalid card rank");
    });

    test('should handle edge cases with invalid inputs', () => {
        expect(() => getCardValue("")).toThrow("Invalid card rank");
        expect(() => getCardValue("♠")).toThrow("Invalid card rank");
        expect(() => getCardValue("2")).toThrow("Invalid card rank");
    });
});
