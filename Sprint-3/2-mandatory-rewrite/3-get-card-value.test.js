const getCardValue = require("./3-get-card-value");

test("should return 4 for 4 of Hearts", () => {
  expect(getCardValue("4♠")).toEqual(4);
});

test("should return 10 for Queen of Spades", () => {
  expect(getCardValue("Q♠")).toEqual(10);
});

test("should return 11 for Ace of Spades", () => {
  expect(getCardValue("A♠")).toEqual(11);
});

test("should throw error for invalid card", () => {
  expect(() => getCardValue("Z♠")).toThrow("Invalid card rank");
});
