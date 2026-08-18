// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

test("returns 11 for an ace", () => {
  expect(getCardValue("A♠")).toEqual(11);
});

test("returns 10 for face cards", () => {
  expect(getCardValue("J♠")).toEqual(10);
  expect(getCardValue("Q♥")).toEqual(10);
  expect(getCardValue("K♦")).toEqual(10);
});

test("returns the correct value for number cards", () => {
  expect(getCardValue("2♠")).toEqual(2);
  expect(getCardValue("5♥")).toEqual(5);
  expect(getCardValue("10♦")).toEqual(10);
});

test("throws an error for invalid cards", () => {
  expect(() => getCardValue("invalid")).toThrow("Invalid card");
  expect(() => getCardValue("")).toThrow("Invalid card");
  expect(() => getCardValue("1♠")).toThrow("Invalid card");
  expect(() => getCardValue("11♠")).toThrow("Invalid card");
  expect(() => getCardValue("A")).toThrow("Invalid card");
  expect(() => getCardValue("X♠")).toThrow("Invalid card");
});