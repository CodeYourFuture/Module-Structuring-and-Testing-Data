// getCardValue.test.js
const { getCardValue } = require('./getCardValue'); // Adjust the path if needed

describe('getCardValue function', () => {
  test('should return correct value for number cards (2-9)', () => {
    expect(getCardValue('2♠')).toBe(2);
    expect(getCardValue('5♠')).toBe(5);
    expect(getCardValue('8♠')).toBe(8);
  });

  test('should return 10 for face cards (J, Q, K)', () => {
    expect(getCardValue('J♠')).toBe(10);
    expect(getCardValue('Q♠')).toBe(10);
    expect(getCardValue('K♠')).toBe(10);
  });

  test('should return 10 for the card 10', () => {
    expect(getCardValue('10♠')).toBe(10);
  });

  test('should return 11 for Ace', () => {
    expect(getCardValue('A♠')).toBe(11);
  });

  test('should throw error for invalid cards', () => {
    expect(() => getCardValue('X♠')).toThrow('Invalid card rank.');
    expect(() => getCardValue('11♠')).toThrow('Invalid card rank.');
  });
});
