const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return 2 for 2♠", () => {
  expect(getCardValue("2♠")).toEqual(2);
});
// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for J♠", () => {
  expect(getCardValue("J♠")).toEqual(10);
});
// Case 4: Handle Ace (A):
test("should return 11 for A", () => {
  expect(getCardValue("A♥")).toEqual(11);
});
// Case 5: Handle Invalid Cards:
test("should return Invalid card rank. for invalid card (for example F♥),", () => {
  expect(getCardValue("F♥")).toEqual("Invalid card rank.");
});
