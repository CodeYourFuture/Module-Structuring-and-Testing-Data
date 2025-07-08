const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return 5 for Ace of Spades", () => {
  const fiveSpades = getCardValue("5♠");
  expect(fiveSpades).toEqual(5);
});

// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for K of Spades", () => {
  const KSpades = getCardValue("K♠");
  expect(KSpades).toEqual(10);
});

// Case 4: Handle Ace (A):
test("should return 11 for A of Spades", () => {
  const ASpades = getCardValue("A♠");
  expect(ASpades).toEqual(11);
});
// Case 5: Handle Invalid Cards:
test("should return null for 17 of Spades", () => {
  const invalidCard = getCardValue("17♠");
  expect(invalidCard).toEqual(null);
});
