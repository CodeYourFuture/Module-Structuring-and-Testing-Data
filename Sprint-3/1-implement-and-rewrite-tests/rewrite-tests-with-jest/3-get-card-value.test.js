// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

// Case 1: Ace (A) - Should return 11
test(`Should return 11 when given an ace card (A♠)`, () => {
  expect(getCardValue("A♠")).toEqual(11);
});

test(`Should return 11 when given an ace card (A♥)`, () => {
  expect(getCardValue("A♥")).toEqual(11);
});

test(`Should return 11 when given an ace card (A♦)`, () => {
  expect(getCardValue("A♦")).toEqual(11);
});

test(`Should return 11 when given an ace card (A♣)`, () => {
  expect(getCardValue("A♣")).toEqual(11);
});

// Case 2: Number Cards (2-10)
test(`Should return 2 when given a number card (2♠)`, () => {
  expect(getCardValue("2♠")).toEqual(2);
});

test(`Should return 3 when given a number card (3♥)`, () => {
  expect(getCardValue("3♥")).toEqual(3);
});

test(`Should return 4 when given a number card (4♦)`, () => {
  expect(getCardValue("4♦")).toEqual(4);
});

test(`Should return 5 when given a number card (5♣)`, () => {
  expect(getCardValue("5♣")).toEqual(5);
});

test(`Should return 6 when given a number card (6♠)`, () => {
  expect(getCardValue("6♠")).toEqual(6);
});

test(`Should return 7 when given a number card (7♥)`, () => {
  expect(getCardValue("7♥")).toEqual(7);
});

test(`Should return 8 when given a number card (8♦)`, () => {
  expect(getCardValue("8♦")).toEqual(8);
});

test(`Should return 9 when given a number card (9♣)`, () => {
  expect(getCardValue("9♣")).toEqual(9);
});

test(`Should return 10 when given a number card (10♠)`, () => {
  expect(getCardValue("10♠")).toEqual(10);
});

// Case 3: Face Cards (J, Q, K) - Should return 10
test(`Should return 10 when given a Jack card (J♠)`, () => {
  expect(getCardValue("J♠")).toEqual(10);
});

test(`Should return 10 when given a Queen card (Q♥)`, () => {
  expect(getCardValue("Q♥")).toEqual(10);
});

test(`Should return 10 when given a King card (K♦)`, () => {
  expect(getCardValue("K♦")).toEqual(10);
});

test(`Should return 10 when given a Jack card (J♣)`, () => {
  expect(getCardValue("J♣")).toEqual(10);
});

test(`Should return 10 when given a Queen card (Q♠)`, () => {
  expect(getCardValue("Q♠")).toEqual(10);
});

test(`Should return 10 when given a King card (K♥)`, () => {
  expect(getCardValue("K♥")).toEqual(10);
});

// Case 4: Invalid Cards - Should throw error
test(`Should throw an error when given an invalid rank`, () => {
  expect(() => getCardValue("X♠")).toThrow();
});

test(`Should throw an error when given an invalid suit`, () => {
  expect(() => getCardValue("A★")).toThrow();
});

test(`Should throw an error when given an empty string`, () => {
  expect(() => getCardValue("")).toThrow();
});

test(`Should throw an error when given only a suit (no rank)`, () => {
  expect(() => getCardValue("♠")).toThrow();
});

test(`Should throw an error when given an invalid format`, () => {
  expect(() => getCardValue("A")).toThrow();
});

