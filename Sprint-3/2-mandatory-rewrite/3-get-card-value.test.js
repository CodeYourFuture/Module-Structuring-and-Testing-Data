const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  // shortened original test code
  expect(getCardValue("A♠")).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return value of number cards (2-10)", () => {
  for (let i = 2; i <= 10; i++) expect(getCardValue(i + "♠")).toEqual(i);
});

// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for Picture cards", () => {
  expect(getCardValue("J♠")).toEqual(10);
  expect(getCardValue("Q♠")).toEqual(10);
  expect(getCardValue("K♠")).toEqual(10);
});

// Case 4: Handle Ace (A):
test("should return 11 for Ace", () => {
  expect(getCardValue("A♠")).toEqual(11);
});

// Case 5: Handle Invalid Cards:
test("should return 'Invalid card rank.' for non card values", () => {
  expect(getCardValue("1♠")).toEqual("Invalid card rank.");
  expect(getCardValue("12♠")).toEqual("Invalid card rank.");
  expect(getCardValue("-1♠")).toEqual("Invalid card rank.");
  expect(getCardValue("0x02♠")).toEqual("Invalid card rank.");
  expect(getCardValue("2.1♠")).toEqual("Invalid card rank.");
  expect(getCardValue("00_02♠")).toEqual("Invalid card rank.");
  expect(getCardValue("3XYZ♠")).toEqual("Invalid card rank.");
});
