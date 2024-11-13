// getCardValue.test.js

const getCardValue = require("./get-card-value"); // Import the function

// Test case 1: Number Cards (2-10)
test('Returns 5 for "5♦"', () => {
  expect(getCardValue("5♦")).toBe(5);
});

test('Returns 10 for "10♠"', () => {
  expect(getCardValue("10♠")).toBe(10);
});

// Test case 2: Face Cards (J, Q, K)
test('Returns 10 for "J♠"', () => {
  expect(getCardValue("J♠")).toBe(10);
});

test('Returns 10 for "Q♣"', () => {
  expect(getCardValue("Q♣")).toBe(10);
});

test('Returns 10 for "K♦"', () => {
  expect(getCardValue("K♦")).toBe(10);
});

// Test case 3: Ace Card (A)
test('Returns 11 for "A♠"', () => {
  expect(getCardValue("A♠")).toBe(11);
});

// Test case 4: Invalid Cards
test('Returns "Invalid card rank" for "Z♠"', () => {
  expect(getCardValue("Z♠")).toBe("Invalid card rank");
});

test('Returns "Invalid card rank" for "Joker♠"', () => {
  expect(getCardValue("Joker♠")).toBe("Invalid card rank");
});

// Test case 5: Edge Cases
test('Returns "Invalid card rank" for an empty string', () => {
  expect(getCardValue("")).toBe("Invalid card rank");
});
