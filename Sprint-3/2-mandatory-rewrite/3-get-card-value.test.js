const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return 7 for Seven of Hearts", () => {
  expect(getCardValue("7♥")).toEqual(7);
});
test("should return 10 for Ten of Diamonds", () => {
  expect(getCardValue("10♦")).toEqual(10);
});
// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for Jack of Clubs", () => {
  expect(getCardValue("J♣")).toEqual(10);
});
test("should return 10 for Queen of Diamonds", () => {
  expect(getCardValue("Q♦")).toEqual(10);
});
test("should return 10 for King of Hearts", () => {
  expect(getCardValue("K♥")).toEqual(10);
});

// Case 4: Handle Ace (A):
test("should return 11 for Ace of Hearts", () => {
  expect(getCardValue("A♥")).toEqual(11);
});
// Case 5: Handle Invalid Cards:
test("should throw an error for invalid card rank", () => {
  expect(() => getCardValue("X♠")).toThrow("Invalid card rank");
});
test("should throw an error for empty string", () => {
  expect(() => getCardValue("")).toThrow("Invalid card rank");
});
