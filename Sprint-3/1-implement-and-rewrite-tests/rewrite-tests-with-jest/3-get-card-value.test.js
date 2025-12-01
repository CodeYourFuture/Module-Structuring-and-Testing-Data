// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceOfSpades = getCardValue("A♠");
  expect(aceOfSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return same number for number cards", () => {
  const cards = [
    ["2♥", 2],
    ["3♣", 3],
    ["4♦", 4],
    ["5♠", 5],
    ["6♥", 6],
    ["7♣", 7],
    ["8♦", 8],
    ["9♠", 9],
    ["10♥", 10],
  ];

  for (const [card, expectedValue] of cards) {
    expect(getCardValue(card)).toEqual(expectedValue);
  }
});

// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for face cards", () => {
  const cards = ["J♦", "K♥", "Q♠"];

  for (const card of cards) {
    expect(getCardValue(card)).toEqual(10);
  }
});

// // Case 4: Handle Ace (A):
test("should return 11 for Ace of Diamonds", () => {
  const aceOfDiamonds = getCardValue("A♦");
  expect(aceOfDiamonds).toEqual(11);
});

// Case 5: Handle Invalid Cards:
test("should throw error for invalid card rank", () => {
  expect(() => {
    getCardValue("A");
  }).toThrow("Invalid card rank.");
});
