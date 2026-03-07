// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

// TODO: Write tests in Jest syntax to cover all possible outcomes.
// Examples:
test(`should return 9 for "9♠"`, () => {
  expect(getCardValue("9♠")).toEqual(9);
});

test(`should return 11 for "A♥"`, () => {
  expect(getCardValue("A♥")).toEqual(11);
});

test(`should return 10 for "J♦"`, () => {
  expect(getCardValue("J♦")).toEqual(10);
});

test(`should return 10 for "Q♣"`, () => {
  expect(getCardValue("Q♣")).toEqual(10);
});

test(`should return 10 for "K♠"`, () => {
  expect(getCardValue("K♠")).toEqual(10);
});


// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
});

// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10)
//   Face Cards (J, Q, K)
//   Invalid Cards


// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror

