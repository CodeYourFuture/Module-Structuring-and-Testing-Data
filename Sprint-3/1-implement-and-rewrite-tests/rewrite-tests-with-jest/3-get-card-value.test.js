// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

test("should return card value for number cards", () => {
  const fiveofHearts = getCardValue("5♥");
  expect(fiveofHearts).toEqual(5);
});

test("should return 10 for 10 card", () => {
  const ten = getCardValue("10♦");
  expect(ten).toEqual(10);
});

test("should return 10 for jack card", () => {
  const jack = getCardValue("J♦");
  expect(jack).toEqual(10);
});

test("should return 10 for queen card", () => {
  const queen = getCardValue("Q♠");
  expect(queen).toEqual(10);
});

test("should return 10 for king card", () => {
  const king = getCardValue("K♥");
  expect(king).toEqual(10);
});

test("should return 11 for the ace cards", () => {
  const ace = getCardValue("A♥");
  expect(ace).toEqual(11);
});

test("should throw an error for invalid card rank", () => {
  expect(() => getCardValue("Z♥")).toThrow("Invalid card rank");
});
