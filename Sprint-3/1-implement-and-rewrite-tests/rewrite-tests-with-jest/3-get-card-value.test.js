/**
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

// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

// Test case 1: Ace cards
describe('Ace cards', () => {
  test('should return 11 for Ace of Spades', () => {
    expect(getCardValue("A♠")).toBe(11);
  });

  test('should return 11 for Ace of Hearts', () => {
    expect(getCardValue("A♥")).toBe(11);
  });

  test('should return 11 for Ace of Diamonds', () => {
    expect(getCardValue("A♦")).toBe(11);
  });

  test('should return 11 for Ace of Clubs', () => {
    expect(getCardValue("A♣")).toBe(11);
  });
});

// Test case 2: Number cards (2-10)
describe('Number cards', () => {
  // Test all number cards 2-9
  test.each([
    ['2♠', 2], ['3♥', 3], ['4♦', 4], ['5♣', 5],
    ['6♠', 6], ['7♥', 7], ['8♦', 8], ['9♣', 9]
  ])('should return %i for card %s', (card, expectedValue) => {
    expect(getCardValue(card)).toBe(expectedValue);
  });

  // Test 10 separately as it has different format
  test('should return 10 for Ten of Spades', () => {
    expect(getCardValue("10♠")).toBe(10);
  });

  test('should return 10 for Ten of Hearts', () => {
    expect(getCardValue("10♥")).toBe(10);
  });

  test('should return 10 for Ten of Diamonds', () => {
    expect(getCardValue("10♦")).toBe(10);
  });

  test('should return 10 for Ten of Clubs', () => {
    expect(getCardValue("10♣")).toBe(10);
  });
});

// Test case 3: Face cards (J, Q, K)
describe('Face cards', () => {
  test.each([
    ['J♠', 10], ['J♥', 10], ['J♦', 10], ['J♣', 10],
    ['Q♠', 10], ['Q♥', 10], ['Q♦', 10], ['Q♣', 10],
    ['K♠', 10], ['K♥', 10], ['K♦', 10], ['K♣', 10]
  ])('should return 10 for face card %s', (card, expectedValue) => {
    expect(getCardValue(card)).toBe(expectedValue);
  });
});

// Test case 4: Invalid cards
describe('Invalid cards', () => {
  // Test invalid format/input types
  test('should throw error for completely invalid card string', () => {
    expect(() => getCardValue("invalid")).toThrow();
  });

  test('should throw error for empty string', () => {
    expect(() => getCardValue("")).toThrow();
  });

  test('should throw error for non-string input (number)', () => {
    expect(() => getCardValue(123)).toThrow();
  });

  test('should throw error for null input', () => {
    expect(() => getCardValue(null)).toThrow();
  });

  test('should throw error for undefined input', () => {
    expect(() => getCardValue(undefined)).toThrow();
  });

  // Test invalid ranks
  test('should throw error for invalid rank', () => {
    expect(() => getCardValue("Z♠")).toThrow();
  });

  test('should throw error for rank that doesn\'t exist', () => {
    expect(() => getCardValue("1♥")).toThrow();
  });

  // Test invalid suits
  test('should throw error for invalid suit symbol', () => {
    expect(() => getCardValue("A⭐")).toThrow();
  });

  test('should throw error for suit without emoji', () => {
    expect(() => getCardValue("AS")).toThrow(); // Using 'S' instead of ♠
  });

  // Test invalid card format
  test('should throw error for card that\'s too short', () => {
    expect(() => getCardValue("A")).toThrow();
  });

  test('should throw error for card that\'s too long', () => {
    expect(() => getCardValue("10♥♠")).toThrow();
  });

  test('should throw error for invalid 3-character card', () => {
    expect(() => getCardValue("11♠")).toThrow();
  });

  test('should throw error when rank and suit are reversed', () => {
    expect(() => getCardValue("♠A")).toThrow();
  });

  // Test edge cases with valid ranks but wrong format
  test('should throw error for "10" without suit', () => {
    expect(() => getCardValue("10")).toThrow();
  });

  test('should throw error for valid rank with multiple suits', () => {
    expect(() => getCardValue("A♠♥")).toThrow();
  });
});

// Test case 5: Verify all suits work correctly with a representative rank
describe('All suits functionality', () => {
  test.each([
    ['5♠', 5], ['5♥', 5], ['5♦', 5], ['5♣', 5]
  ])('should work correctly with suit %s', (card, expectedValue) => {
    expect(getCardValue(card)).toBe(expectedValue);
  });
});

