// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
});
test(`Should return 9 when given an 9♠`, () => {
  expect(getCardValue("9♠")).toEqual(9);
});
test(`Should return 2 when given an 2♥`, () => {
  expect(getCardValue("2♥")).toEqual(2);
});
test(`Should return 10 when given an 10♥`, () => {
  expect(getCardValue("10♥")).toEqual(10);
});
test(`Should return 10 when given an Q♦`, () => {
  expect(getCardValue("Q♦")).toEqual(10);
});
test(`Should return Error when given an ♦Q`, () => {
  expect(function() {getCardValue("♦Q");}).toThrow("Invalid card");
});
test(`Should return Error when given an 11♦`, () => {
  expect(function() {getCardValue("11♦")}).toThrow("Invalid card");
});


// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10)
//   Face Cards (J, Q, K)
//   Invalid Cards

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror

