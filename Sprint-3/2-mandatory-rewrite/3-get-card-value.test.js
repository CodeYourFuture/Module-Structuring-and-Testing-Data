const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return 2 for 2 of Hearts", () => {
  expect(getCardValue("2♥")).toEqual(2);
});

test("should return 9 for 9 of Clubs", () => {
  expect(getCardValue("9♣")).toEqual(9);
});

test("should return 10 for 10 of Diamonds", () => {
  expect(getCardValue("10♦")).toEqual(10);
});

// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for Jack of Clubs", () => {
  expect(getCardValue("J♣")).toEqual(10);
});

test("should return 10 for Queen of Hearts", () => {
  expect(getCardValue("Q♥")).toEqual(10);
});

test("should return 10 for King of Spades", () => {
  expect(getCardValue("K♠")).toEqual(10);
});

// Case 4: Handle Ace (A):
test("should return 11 for Ace of Diamonds", () => {
  expect(getCardValue("A♦")).toEqual(11);
});

// Case 5: Handle Invalid Cards:
test("should return 0 for invalid card Z♣", () => {
  expect(getCardValue("Z♣")).toEqual(0);
});

test("should return 0 for empty string", () => {
  expect(getCardValue("")).toEqual(0);
});

test("should return 0 for non-string input", () => {
  expect(getCardValue(5)).toEqual(0);
});
