const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceOfSpades = getCardValue("A♠");
  expect(aceOfSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return the value of number cards (2-10)", () => {
  expect(getCardValue("2♣")).toEqual(2);
  expect(getCardValue("5♠")).toEqual(5);
  expect(getCardValue("10♥")).toEqual(10);
});

// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for Face cards J, Q, K", () => {
  expect(getCardValue("J♠")).toEqual(10);
  expect(getCardValue("Q♥")).toEqual(10);
});

// Case 4: Handle Ace (A):
test("should return 11 for Ace of Diamonds", () => {
  expect(getCardValue("A♦")).toEqual(11);
});

// Case 5: Handle Invalid Cards:
test("should throw an error for invalid card", () => {
  expect(() => getCardValue("Z♠")).toThrow("Invalid card");
});
test("should throw an error for empty card", () => {
  expect(() => getCardValue("")).toThrow("Invalid card");
});
