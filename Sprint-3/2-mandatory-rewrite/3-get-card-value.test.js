const getCardValue = require("./3-get-card-value");

test("Should return 11 for Ace of Spades", () => {
  const aceOfSpades = getCardValue("A♠");
  expect(aceOfSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):

test("Should return card value (2 to 10)", () => {
  expect(getCardValue("5♠")).toEqual(5);
  expect(getCardValue("8♥")).toEqual(8);
  expect(getCardValue("3♠")).toEqual(3);
});

// Case 3: Handle Face Cards (J, Q, K):

test("Should return 10 for Face Cards (J, Q, K)", () => {
  expect(getCardValue("J♠")).toEqual(10);
  expect(getCardValue("Q♥")).toEqual(10);
  expect(getCardValue("K♠")).toEqual(10);
});

// Case 4: Handle Ace (A):

test("should return 11 for Ace", () => {
  const ace = getCardValue("A");
  expect(ace).toEqual(11);
});

// Case 5: Handle Invalid Cards:

test("should return error 'Invalid card rank' for invalid card rank", () => {
  expect(getCardValue("Seven♠")).toEqual("Error: Invalid card rank");
});
