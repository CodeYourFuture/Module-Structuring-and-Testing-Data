// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
});

test(`Should return 10 when given an a face card of J, Q or K`, () => {
  expect(getCardValue("J♠")).toEqual(10);
  expect(getCardValue("Q♠")).toEqual(10);
  expect(getCardValue("K♠")).toEqual(10);
});

test(`Should return number when given an a face card (>= 2 && < 10)`, () => {
  expect(getCardValue("2♠")).toEqual(2);
  expect(getCardValue("6♠")).toEqual(6);
  expect(getCardValue("9♠")).toEqual(9);
});

test(`Should return an error for an invalid card`, () => {
  expect(getCardValue("2")).toThrowError();
  expect(getCardValue("Q")).toThrowError();
  expect(getCardValue("5")).toThrowError();
});

// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10)
//   Face Cards (J, Q, K)
//   Invalid Cards

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror
