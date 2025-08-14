const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spade", () => {
  expect(getCardValue("A♠")).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should handle number cards", () => {
  expect(getCardValue("3♥")).toEqual(3);
  expect(getCardValue("5♠")).toEqual(5);
  expect(getCardValue("10♦")).toEqual(10);
});
// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for face cards", () => {
  expect(getCardValue("J♥")).toEqual(10);
  expect(getCardValue("Q♠")).toEqual(10);
  expect(getCardValue("K♥")).toEqual(10);
});
// Case 4: Handle Ace (A):
test("should return 11 for Ace cards", () => {
  expect(getCardValue("A♥")).toEqual(11);
});
// Case 5: Handle Invalid Cards:
test("should throw error for invalid cards", () => {
  expect(() => getCardValue("22♦")).toThrow("Invalid card rank");
});
