const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  // shortened original test code
  expect(getCardValue("A♠")).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
for (let i = 2; i <= 10; i++) {
  // for cards 2 - 10
  test("should return " + (i + 1) + " for Two to Ten of Spades", () => {
    expect(getCardValue(String(i) + "♠")).toEqual(i);
  });
}

// Case 3: Handle Face Cards (J, Q, K):
test("should return 11 for Jack of Spades", () => {
  expect(getCardValue("J♠")).toEqual(10);
});

test("should return 11 for Queen of Spades", () => {
  expect(getCardValue("Q♠")).toEqual(10);
});

test("should return 11 for King of Spades", () => {
  expect(getCardValue("K♠")).toEqual(10);
});

// Case 4: Handle Ace (A):
test("should return 11 for Ace of Spades", () => {
  expect(getCardValue("A♠")).toEqual(11);
});

// Case 5: Handle Invalid Cards:
test("should return 'Invalid card rank.' for One of Spades", () => {
  expect(getCardValue("1♠")).toEqual("Invalid card rank.");
});

test("should return 'Invalid card rank.' for Twelve of Spades", () => {
  expect(getCardValue("12♠")).toEqual("Invalid card rank.");
});

test("should return 'Invalid card rank.' for Negative One of Spades", () => {
  expect(getCardValue("-1♠")).toEqual("Invalid card rank.");
});
