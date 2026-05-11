// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
});

// Number Cards (2-10)
test(`Should return 2 when given a "2♠" card`, () => {
  expect(getCardValue("2♠")).toEqual(2);
});

test(`Should return 9 when given a "9♠" card`, () => {
  expect(getCardValue("9♠")).toEqual(9);
});

test(`Should return 10 when given a "10♥" card`, () => {
  expect(getCardValue("10♥")).toEqual(10);
});

// Face Cards (J, Q, K)
test(`Should return 10 when given a Jack "J♥" card`, () => {
  expect(getCardValue("J♥")).toEqual(10);
});

test(`Should return 10 when given a Queen "Q♦" card`, () => {
  expect(getCardValue("Q♦")).toEqual(10);
});

test(`Should return 10 when given a King "K♦" card`, () => {
  expect(getCardValue("K♦")).toEqual(10);
});

//   Invalid Cards
test(`Should return error when given a string`, () => {
  expect(() => { getCardValue("invalid");}).toThrow("Invalid card");
});

test(`Should return error when given a wrong letter`, () => {
  expect(() => { getCardValue("L♦");}).toThrow("Invalid card");
});

test(`Should return error when given a wrong letter`, () => {
  expect(() => { getCardValue("L♦");}).toThrow("Invalid card");
});

test(`Should return error when given a wrong number`, () => {
  expect(() => { getCardValue("11♦");}).toThrow("Invalid card");
});

test(`Should return error when given a wrong order`, () => {
  expect(() => { getCardValue("♦2");}).toThrow("Invalid card");
});

test(`Should return error when given no suit`, () => {
  expect(() => { getCardValue("3");}).toThrow("Invalid card");
});

test(`Should return error when given only suit`, () => {
  expect(() => { getCardValue("♦");}).toThrow("Invalid card");
});


// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror