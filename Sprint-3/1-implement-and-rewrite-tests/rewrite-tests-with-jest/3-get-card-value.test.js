// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const { createTestScheduler } = require("jest");
const getCardValue = require("../implement/3-get-card-value");

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
});

// Case 2: Face Cards (J, Q, K)
test(`Should return 10 when given a Jack card`, () => {
  expect(getCardValue("J♥")).toEqual(10);
});

test(`Should return 10 when given a Queen card`, () => {
  expect(getCardValue("Q♦")).toEqual(10);
});

test(`Should return 10 when given a King card`, () => {
  expect(getCardValue("K♣")).toEqual(10);
});

// Case 3: Number Cards (2-10)
test(`Should return 2 when given a 2 card`, () => {
  expect(getCardValue("2♠")).toEqual(2);
});

test(`Should return 10 when given a 10 card`, () => {
  expect(getCardValue("10♥")).toEqual(10);
});

// Case 4: Invalid Cards
test(`Should throw an error when given an invalid card`, () => {
  expect(() => getCardValue("♠J")).toThrow();
});

test(`Should throw an error when given an invalid card`, () => {
  expect(() => getCardValue("invalid")).toThrow();
});

test(`Should throw an error when given an invalid card`, () => {
  expect(() => getCardValue("12♠")).toThrow();
});

test(`Should throw an error when given an invalid card`, () => {
  expect(() => getCardValue("1")).toThrow();
});

// when I tested with test(`Should throw an error when given an invalid card`, () => {
// expect(() => getCardValue("22")).toThrow();  it did not throw an error because 22 passes the
// test of first number between and 9 and being 2 characters long,
// but it is not a valid card because the second character is not a valid suite.
// The second character is not checked.
