const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should handle number cards within range (2-10)", () => {
  const numberCards = getCardValue("7♦");
  expect(numberCards).toEqual(7);
});

// Case 3: Handle Face Cards (J, Q, K):
test("should handle face cards (J, K, Q) to return a value of 10", () => {
  const faceCards = ["K♠", "Q♥", "J♦", "10♣"];
  for (const card of faceCards) {
  expect(getCardValue(card)).toEqual(10);
  }
});

// Case 4: Handle Ace (A):
test("should return 11 for an Ace", () => {
  const aceCard = getCardValue("A♥");
  expect(aceCard).toEqual(11);
});

// Case 5: Handle Invalid Cards:
test("should return 'Invalid card rank' for cards that a neither a number nor a recognized face", () => {
  const invalidCards = ["Y", "11", "Y♠", "15♣"];
  for (const card of invalidCards) {
  expect(getCardValue(card)).toEqual("Invalid card rank");
  }
});
