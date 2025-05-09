const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

test("should return numeric value for number cards (2-10)", () => {
  expect(getCardValue("2♠")).toEqual(2);
  expect(getCardValue("3♣")).toEqual(3);
  expect(getCardValue("10♦")).toEqual(10);
});

test("should return 10 for face cards (J, Q, K)", () => {
  expect(getCardValue("J♠")).toEqual(10);
  expect(getCardValue("Q♣")).toEqual(10);
  expect(getCardValue("K♦")).toEqual(10);
});

test("should return 11 for Ace (A)", () => {
  expect(getCardValue("A♥")).toEqual(11);
});

test("should throw an error for invalid card ranks", () => {
  expect(() => getCardValue("Z♠")).toThrow("Invalid card rank");
  expect(() => getCardValue("1♠")).toThrow("Invalid card rank");
  expect(() => getCardValue("0♠")).toThrow("Invalid card rank");
});
