const getCardValue = require("./3-get-card-value");

test("Should return 11 for Ace of Spades", () => {
  const aceOfSpades = getCardValue("A♠");
  expect(aceOfSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):

test("Should return 5 for Five of Hearts", () => {
  const fiveOfHearts = getCardValue("5♥");
  expect(fiveOfHearts).toEqual(5);
});

// Case 3: Handle Face Cards (J, Q, K):

test("Should return 10 for Jack of Spades", () => {
  const jackOfSpades = getCardValue("J♠");
  expect(jackOfSpades).toEqual(10);
});

// Case 4: Handle Ace (A):

test("should return 11 for Ace", () => {
  const ace = getCardValue("A");
  expect(ace).toEqual(11);
});

// Case 5: Handle Invalid Cards:

test("should return error 'Invalid card rank' for invalid card rank", () => {
  expect(() => getCardValue("Seven♠")).toThrow("Invalid card rank");
});
