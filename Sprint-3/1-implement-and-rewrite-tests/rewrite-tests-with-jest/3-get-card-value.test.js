// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
});

test(`Should return 10 when given a Joker card`, () => {
  expect(getCardValue("J♥")).toEqual(10);
});

test(`Should return 2 when given the 2 card`, () => {
  expect(getCardValue("2♠")).toEqual(2);
});

test(`Should return 10 when given a King card`, () => {
  expect(getCardValue("K♠")).toEqual(10);
});

test(`Should return 5 when given the 5 card`, () => {
  expect(getCardValue("5♠")).toEqual(5);
});

test(`Should return 8 when gine the 8 card`, () => {
  expect(getCardValue("8♠")).toEqual(8);
});

test(`Should return 10 when given the Queen card`, () => {
  expect(getCardValue("Q♠")).toEqual(10);
});
// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10)
//   Face Cards (J, Q, K)
//   Invalid Cards

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror
test(`Should not return any card should throw an error message`, () => {
  expect(() => {
    getCardValue("QQ♥");
  }).toThrow();
});
