const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("Should be able to handle Number Cards (2 -10)", () => {
  const threeSpades = getCardValue("3♠");
  expect(threeSpades).toEqual(3);
});
// Case 3: Handle Face Cards (J, Q, K):
test("Should be able to handle Face Cards (J, Q, K)", () => {
  const kingsOfAce = getCardValue("K♧");
  expect(kingsOfAce).toEqual(10);
});
// Case 4: Handle Ace (A):
test("Should be able to Handle Ace (A)", () => {
  const aceOfDiamonds = getCardValue("A♦");
  expect(aceOfDiamonds).toEqual(11);
});
// Case 5: Handle Invalid Cards:
test("Should be able to handle Invalid Cards (1A)", () => {
  const invalidCard = getCardValue("1A");
  expect(invalidCard).toBe("invalid card rank"); // Use toBe for strict equality
});
