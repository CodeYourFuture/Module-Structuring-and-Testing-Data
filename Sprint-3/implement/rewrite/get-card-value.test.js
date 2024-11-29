const getCardValue = require("./get-card-value");

test("should return 11 for A♠", () => {
  expect(getCardValue("A♠")).toEqual(11);
});

test("should return 5 for 5♥", () => {
  expect(getCardValue("5♥")).toEqual(5);
});

test("should return 10 for Q♣", () => {
  expect(getCardValue("Q♣")).toEqual(10);
});

test("should return 10 for 10♦", () => {
  expect(getCardValue("10♦")).toEqual(10);
});

test("should throw 'Invalid card rank' for invalid rank", () => {
  expect(() => getCardValue("X♦")).toThrow(/Invalid card rank./);
});
