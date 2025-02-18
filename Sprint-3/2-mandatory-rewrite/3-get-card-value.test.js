const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):

test("should return number for 9 of Spades", () => {
  const aceofSpades = getCardValue("9♠");
  expect(aceofSpades).toEqual(9);
});
// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for J of Spades", () => {
  const aceofSpades = getCardValue("J♠");
  expect(aceofSpades).toEqual(10);
});
// Case 4: Handle Ace (A):

// Case 5: Handle Invalid Cards:
test("should return 'Invalid card rank.' for invalid input", () => {
  const aceofSpades = getCardValue("6478♠");
  expect(aceofSpades).toEqual("Invalid card rank.");
});
