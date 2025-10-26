// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return correct value for numbered cards (2-10)", () => {
  expect(getCardValue("5♥")).toBe(5);
  expect(getCardValue("10♦")).toBe(10);
});
// Case 3: Handle Face Cards (J, Q, K):
test("should return 'Invalid card rank' for invalid cards", () => {
  ["1♣", "B♦", "Z♠"].forEach((card) => {
    expect(getCardValue(card)).toBe("Invalid card rank");
  });
});
// Case 4: Handle Ace (A):
test("should return 11 for Ace (A)", () => {
  ["A♠", "A♥"].forEach((card) => {
    expect(getCardValue(card)).toBe(11);
  });
});
// Case 5: Handle Invalid Cards:
test("should return 'Invalid card rank' for invalid cards", () => {
  ["1♣", "B♦", "Z♠"].forEach((card) => {
    expect(getCardValue(card)).toBe("Invalid card rank");
  });
});