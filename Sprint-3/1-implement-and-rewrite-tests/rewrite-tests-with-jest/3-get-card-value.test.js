/**
 * Original file:
 *
// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
});

// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10)
//   Face Cards (J, Q, K)
//   Invalid Cards

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror
*
*/

// Implementation

const getCardValue = require("../implement/3-get-card-value");

describe('getCardValue', () => {
  // Test all valid cards
  describe('valid cards', () => {
    // Test all aces
    test('should return 11 for aces', () => {
      expect(getCardValue('A♠')).toBe(11);
      expect(getCardValue('A♥')).toBe(11);
      expect(getCardValue('A♦')).toBe(11);
      expect(getCardValue('A♣')).toBe(11);
    });

    // Test all number cards
    test('should return correct numeric value for number cards', () => {
      expect(getCardValue('2♠')).toBe(2);
      expect(getCardValue('3♥')).toBe(3);
      expect(getCardValue('4♦')).toBe(4);
      expect(getCardValue('5♣')).toBe(5);
      expect(getCardValue('6♠')).toBe(6);
      expect(getCardValue('7♥')).toBe(7);
      expect(getCardValue('8♦')).toBe(8);
      expect(getCardValue('9♣')).toBe(9);
    });

    // Test 10 specifically (since it's two digits)
    test('should return 10 for ten cards', () => {
      expect(getCardValue('10♠')).toBe(10);
      expect(getCardValue('10♥')).toBe(10);
      expect(getCardValue('10♦')).toBe(10);
      expect(getCardValue('10♣')).toBe(10);
    });

    // Test all face cards
    test('should return 10 for face cards', () => {
      expect(getCardValue('J♠')).toBe(10);
      expect(getCardValue('Q♥')).toBe(10);
      expect(getCardValue('K♦')).toBe(10);
      expect(getCardValue('J♣')).toBe(10);
    });
  });

  // Test invalid inputs
  describe('invalid inputs', () => {
    // Test invalid formats
    test('should throw error for empty string', () => {
      expect(() => getCardValue('')).toThrow('Invalid card format');
    });

    test('should throw error for card without suit', () => {
      expect(() => getCardValue('A')).toThrow('Invalid card format');
      expect(() => getCardValue('10')).toThrow('Invalid card format');
    });

    test('should throw error for card with extra characters', () => {
      expect(() => getCardValue('A♠♠')).toThrow('Invalid card format');
      expect(() => getCardValue('10♠♠')).toThrow('Invalid card format');
    });

    // Test invalid ranks
    test('should throw error for invalid rank', () => {
      expect(() => getCardValue('1♠')).toThrow('Invalid card format');
      expect(() => getCardValue('11♠')).toThrow('Invalid card format');
      expect(() => getCardValue('B♠')).toThrow('Invalid card format');
      expect(() => getCardValue('X♠')).toThrow('Invalid card format');
    });

    // Test invalid suits
    test('should throw error for invalid suit', () => {
      // Using similar-looking but incorrect suit symbols
      expect(() => getCardValue('A♤')).toThrow('Invalid card format'); // ♤ instead of ♠
      expect(() => getCardValue('A♡')).toThrow('Invalid card format'); // ♡ instead of ♥
      expect(() => getCardValue('A♢')).toThrow('Invalid card format'); // ♢ instead of ♦
      expect(() => getCardValue('A♧')).toThrow('Invalid card format'); // ♧ instead of ♣
    });

    // Test wrong order
    test('should throw error when suit comes before rank', () => {
      expect(() => getCardValue('♠A')).toThrow('Invalid card format');
      expect(() => getCardValue('♥10')).toThrow('Invalid card format');
    });

    // Test invalid types
    test('should throw error for non-string inputs', () => {
      expect(() => getCardValue(123)).toThrow('Invalid card format');
      expect(() => getCardValue(null)).toThrow('Invalid card format');
      expect(() => getCardValue(undefined)).toThrow('Invalid card format');
      expect(() => getCardValue({})).toThrow('Invalid card format');
      expect(() => getCardValue([])).toThrow('Invalid card format');
    });
  });

  // Test edge cases
  describe('edge cases', () => {
    test('should handle lowercase ranks? (assuming they should be invalid)', () => {
      // This test checks if the function is case-sensitive
      // According to spec, ranks should be uppercase
      expect(() => getCardValue('a♠')).toThrow('Invalid card format');
      expect(() => getCardValue('j♥')).toThrow('Invalid card format');
    });

    test('should handle whitespace', () => {
      // Cards shouldn't have whitespace according to spec
      expect(() => getCardValue('A ♠')).toThrow('Invalid card format');
      expect(() => getCardValue(' 10♥')).toThrow('Invalid card format');
    });

    test('should throw error for completely invalid strings', () => {
      expect(() => getCardValue('invalid')).toThrow('Invalid card format');
      expect(() => getCardValue('xyz')).toThrow('Invalid card format');
      expect(() => getCardValue('hello world')).toThrow('Invalid card format');
    });
  });
});

