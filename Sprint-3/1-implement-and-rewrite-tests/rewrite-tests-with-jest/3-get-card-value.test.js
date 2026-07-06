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
test(`Should return 2 when given a 2 card`, () => {
  expect(getCardValue("2♠")).toEqual(2);
});
test(`Should return 3 when given a 3 card`, () => {
  expect(getCardValue("3♠")).toEqual(3);
});
test(`Should return 4 when given a 4 card`, () => {
  expect(getCardValue("4♠")).toEqual(4);
});
test(`Should return 5 when given a 5 card`, () => {
  expect(getCardValue("5♠")).toEqual(5);
});
test(`Should return 6 when given a 6 card`, () => {
  expect(getCardValue("6♠")).toEqual(6);
});
test(`Should return 7 when given a 7 card`, () => {
  expect(getCardValue("7♠")).toEqual(7);
});
test(`Should return 8 when given a 8 card`, () => {
  expect(getCardValue("8♠")).toEqual(8);
});

  

//   Face Cards (J, Q, K)
//   Invalid Cards

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror

