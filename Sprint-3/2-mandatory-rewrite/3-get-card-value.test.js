const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return the numeric value corresponding to the rank", () => {
  expect(getCardValue("2♣︎")).toEqual(2);
});
// Case 3: Handle Face Cards (J, Q, K):
test("should return the value 10, as these cards are worth 10 points each in blackjack", () => {
  expect(getCardValue("J♠︎")).toEqual(10);
});
// Case 4: Handle Ace (A):
test("should return 11 for Ace", () => {
  expect(getCardValue("A♦︎")).toEqual(11);
});
// Case 5: Handle Invalid Cards:
test("should return Invalid card rank", () => {
  expect(getCardValue("11")).toEqual("Invalid Card rank");
});
