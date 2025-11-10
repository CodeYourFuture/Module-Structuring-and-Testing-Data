// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

test("should return correct value for number cards (2-9)", () => {
  expect(getCardValue("2♦")).toEqual(2);
  expect(getCardValue("3♣")).toEqual(3);
  expect(getCardValue("4♥")).toEqual(4);
  expect(getCardValue("5♥")).toEqual(5);
  expect(getCardValue("6♠")).toEqual(6);
  expect(getCardValue("7♦")).toEqual(7);
  expect(getCardValue("8♣")).toEqual(8);
  expect(getCardValue("9♥")).toEqual(9);
});

test("should return 10 for face cards (J, Q, K, 10)", () => {
  expect(getCardValue("10♣")).toEqual(10);
  expect(getCardValue("J♦")).toEqual(10);
  expect(getCardValue("Q♠")).toEqual(10);
  expect(getCardValue("K♥")).toEqual(10);
});

test("should return 11 for all Aces", () => {
  expect(getCardValue("A♠")).toEqual(11);
  expect(getCardValue("A♥")).toEqual(11);
  expect(getCardValue("A♦")).toEqual(11);
  expect(getCardValue("A♣")).toEqual(11);
});

test("should throw an error for invalid card rank", () => {
  expect(() => getCardValue("X♠")).toThrow("Invalid card rank");
  expect(() => getCardValue("Z♥")).toThrow("Invalid card rank");
  expect(() => getCardValue("11♦")).toThrow("Invalid card rank");
  expect(() => getCardValue("0♣")).toThrow("Invalid card rank");
});
