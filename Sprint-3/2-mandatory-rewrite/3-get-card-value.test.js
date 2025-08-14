const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return the number of the card for 2♥", () => {
  const numberCards = getCardValue("2♥");
  expect(numberCards).toEqual(2);
});

// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for J♣", () => {
  const faceCards = getCardValue("J♣");
  expect(faceCards).toEqual(10);
});

// Case 4: Handle Ace (A):
test("should return 11 for A♥", () => {
  const aceCards = getCardValue("A♥");
  expect(aceCards).toEqual(11);
});
// Case 5: Handle Invalid Cards:
test("throws error on invalid card", () => {
  expect(() => getCardValue("223")).toThrow(Error.message);
});
