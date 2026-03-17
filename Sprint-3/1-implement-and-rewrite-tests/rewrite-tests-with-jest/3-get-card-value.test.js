// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
});

// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10)
test(`Should return the correct value for number cards`, () => {
  expect(getCardValue("2♠")).toEqual(2);
  expect(getCardValue("5♠")).toEqual(5);
  expect(getCardValue("10♠")).toEqual(10);
});

//   Face Cards (J, Q, K)
test(`Should return 10 for face cards`, () => {
  expect(getCardValue("J♠")).toEqual(10);
  expect(getCardValue("Q♠")).toEqual(10);
  expect(getCardValue("K♠")).toEqual(10);
});

//   Invalid Cards
test(`Should throw an error for invalid card strings`, () => {
  expect(() => getCardValue("invalid")).toThrow("Invalid card format");
  expect(() => getCardValue("11♠")).toThrow("Invalid card format");
  expect(() => getCardValue("A♤")).toThrow("Invalid card format");
  expect(() => getCardValue(123)).toThrow("Card must be a string");
  expect(() => getCardValue(1)).toThrow("Card must have at least two characteristics");
  expect(() => getCardValue("")).toThrow("Card must have at least two characteristics");
});

// https://jestjs.io/docs/expect#tothrowerror
    
