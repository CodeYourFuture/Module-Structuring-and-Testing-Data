// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");


// Case 1: Ace
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
  expect(getCardValue("A♥")).toEqual(11);
});


// Case 2: Number Cards (2-10)
test(`Should return correct number for number cards`, () => {
  expect(getCardValue("2♣")).toEqual(2);
  expect(getCardValue("9♠")).toEqual(9);
  expect(getCardValue("10♦")).toEqual(10);
});


// Case 3: Face Cards (J, Q, K)
test(`Should return 10 for face cards`, () => {
  expect(getCardValue("J♠")).toEqual(10);
  expect(getCardValue("Q♥")).toEqual(10);
  expect(getCardValue("K♦")).toEqual(10);
});


// Case 4: Invalid Cards - Invalid suit
test(`Should throw error for invalid suit`, () => {
  expect(() => getCardValue("A?")).toThrow();
});


// Case 5: Invalid Cards - Invalid rank
test(`Should throw error for invalid rank`, () => {
  expect(() => getCardValue("1♠")).toThrow();
  expect(() => getCardValue("11♣")).toThrow();
});


// Case 6: Completely invalid string
test(`Should throw error for completely invalid input`, () => {
  expect(() => getCardValue("invalid")).toThrow();
});
