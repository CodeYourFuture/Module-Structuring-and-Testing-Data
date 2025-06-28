const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceOfSpades = getCardValue("A♠");
  expect(aceOfSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return 10 for Ten of Diamonds", () => {
  expect(getCardValue("10♦")).toEqual(10);
});

// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for Face Cards", () => {
  expect(getCardValue("J♠")).toEqual(10);
});

// Case 4: Handle Ace (A):
test("should return 11 for Ace of Hearts", () => {
  expect(getCardValue("A♥")).toEqual(11);
});
// Case 5: Handle Invalid Cards:
test("should throw an error for invalid card rank", () => {
  expect(() => getCardValue("W♠")).toThrow("Invalid card rank");
});
