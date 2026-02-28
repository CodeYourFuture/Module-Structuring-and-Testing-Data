// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
  expect(getCardValue("A♥")).toEqual(11);
});

test(`Should return the correct numeric value for number cards`, () => {
  expect(getCardValue("2♣")).toEqual(2);
  expect(getCardValue("7♥")).toEqual(7);
  expect(getCardValue("10♦")).toEqual(10);
});

test(`Should return 10 for face cards (J, Q, K)`, () => {
  expect(getCardValue("J♠")).toEqual(10);
  expect(getCardValue("Q♥")).toEqual(10);
  expect(getCardValue("K♦")).toEqual(10);
});

test(`Should throw an error for invalid card rank`, () => {
  expect(() => getCardValue("1♠")).toThrow("Invalid card rank");
  expect(() => getCardValue("11♥")).toThrow("Invalid card rank");
  expect(() => getCardValue("Z♦")).toThrow("Invalid card rank");
  expect(() => getCardValue("0x02♠")).toThrow("Invalid card rank");
  expect(() => getCardValue("3.1416♠")).toThrow("Invalid card rank");
});

test(`Should throw an error for invalid card suit`, () => {
  expect(() => getCardValue("5X")).toThrow("Invalid card suit");
  expect(() => getCardValue("10-")).toThrow("Invalid card suit");
  expect(() => getCardValue("A/")).toThrow("Invalid card suit");
});

