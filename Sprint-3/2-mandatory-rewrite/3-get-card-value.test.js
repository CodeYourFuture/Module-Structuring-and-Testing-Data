const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

test("should return 5 for Five of Hearts", () => {
  const fiveofHearts = getCardValue("5♠");
  expect(fiveofHearts).toEqual(5);
});

test("should return 10 for Queen of Hearts", () => {
  const queenOfHearts = getCardValue("Q♠");
  expect(queenOfHearts).toEqual(10);
});

test("should return 11 for Ace of Hearts", () => {
  const aceofHearts = getCardValue("A♠");
  expect(aceofHearts).toEqual(11);
});

test("should throw an error for invalid card rank", () => {
  expect(() => getCardValue("🃏")).toThrow("invalid card rank");
});
