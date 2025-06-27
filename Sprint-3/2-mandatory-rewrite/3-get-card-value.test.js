const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return the numeric value of the card", () => {
  const fiveofHearts = getCardValue("5♥");
  expect(fiveofHearts).toEqual(5);
});

// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for face cards", () => {
  const queenOfDiamonds = getCardValue("Q♦");
  expect(queenOfDiamonds).toEqual(10);
});

// Case 4: Handle Ace (A):
test("should return 11 for ace", () => {
  const aceOfClubs = getCardValue("A♣");
  expect(getCardValue("A♣")).toEqual(11);
});

// Case 5: Handle Invalid Cards:
test("should return 'Invalid card rank' for invalid card", () => {
  const invalidCard = getCardValue("Z♠");
  expect(invalidCard).toEqual("Invalid card rank");
});
