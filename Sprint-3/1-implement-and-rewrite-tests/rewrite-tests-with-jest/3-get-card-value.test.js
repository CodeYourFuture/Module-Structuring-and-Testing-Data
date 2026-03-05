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
test(`Should return 10 when given a 10 card`, () => {
  expect(getCardValue("10♠")).toEqual(10);
});
//   Face Cards (J, Q, K)
test(`Should return 10 when given a Jack card`, () => {
  expect(getCardValue("J♠")).toEqual(10);
});
test(`Should return 10 when given a Queen card`, () => {
  expect(getCardValue("Q♠")).toEqual(10);
});
test(`Should return 10 when given a King card`, () => {
  expect(getCardValue("K♠")).toEqual(10);
});
//   Invalid Cards
test(`Should throw an error when given an invalid card`, () => {
  expect(() => getCardValue("11♠")).toThrow("Invalid card: Invalid rank");
  expect(() => getCardValue("A")).toThrow("Invalid card: Invalid suit");
  expect(() => getCardValue("2X")).toThrow("Invalid card: Invalid suit");
});
// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror
