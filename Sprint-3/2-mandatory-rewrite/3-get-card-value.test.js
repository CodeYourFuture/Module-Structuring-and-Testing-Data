const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return 10 for 10 of Hearts", () => {
  const tenOfHearts = getCardValue("10♥");
  expect(tenOfHearts).toEqual(10);
});
test("should return 5 for 10 of Spades", () => {
  const fiveOfHearts = getCardValue("5♠");
  expect(fiveOfHearts).toEqual(5);
});
// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for Kings of Spades", () => {
  const tenOfHearts = getCardValue("K♠");
  expect(tenOfHearts).toEqual(10);
});
test("should return 10 for Queen of Hearts", () => {
  const queenOfHearts = getCardValue("Q♥");
  expect(queenOfHearts).toEqual(10);
});
// Case 4: Handle Ace (A):
test("should return 11 for Ace of Hearts", () => {
  const AceOfHearts = getCardValue("A♥");
  expect(AceOfHearts).toEqual(11);
});
// Case 5: Handle Invalid Cards:
test("should return Invalid Card for letters", () => {
  const AceOfHearts = getCardValue("SS");
  expect(AceOfHearts).toEqual("Invalid card rank.");
});
