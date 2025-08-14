const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return 1-9 for all non faced cards no matter what card suit is", () => {
  const fiveofHearts = getCardValue("5♥");
  expect(fiveofHearts).toEqual(5);
  const sixofSpades = getCardValue("6♠");
  expect(sixofSpades).toEqual(6);
  const tenofSpades = getCardValue("10♠");
  expect(tenofSpades).toEqual(10);
});
// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for all faced cards no matter what card suit is", () => {
  const jackofHearts = getCardValue("J♥");
  expect(jackofHearts).toEqual(10);
  const kingofSpades = getCardValue("K♠");
  expect(kingofSpades).toEqual(10);
});
// Case 4: Handle Ace (A):
test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});
// Case 5: Handle Invalid Cards:
test("should return Invalid message for non existent cards", () => {
  const invalid = getCardValue("D♠");
  expect(invalid).toEqual("Invalid Card Rank");
});
