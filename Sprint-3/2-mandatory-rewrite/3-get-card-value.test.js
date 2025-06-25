const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return number for card number bw 2-10", () => {
  const fiveofHearts = getCardValue("5♥");
  expect(fiveofHearts).toEqual(5);
});
// Case 3: Handle Face Cards (J, Q, K):
test("should return number for face of cards", () => {
  const faceofHearts = getCardValue("J♥");
  expect(faceofHearts).toEqual(10);
});
// Case 4: Handle Ace (A):
test("should return number for face of cards", () => {
  const aceofHearts = getCardValue("A♥");
  expect(aceofHearts).toEqual(11);
});
// Case 5: Handle Invalid Cards:
test("should return number for face of cards", () => {
  const invalidCard = getCardValue("C♥");
  expect(invalidCard).toEqual("Invalid card rank.");
});
