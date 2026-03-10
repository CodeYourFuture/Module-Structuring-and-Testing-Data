// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

// Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
});

// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10)
test(`Should return should return its numeric value`, () => {
  expect(getCardValue("9♠")).toEqual(9);
});
//   Face Cards (J, Q, K)
test(`Should return 10`, () => {
  expect(getCardValue("K♠")).toEqual(10);
});
//   Invalid Cards
test(`Should throw an error`, () => {
  expect(() => {
    getCardValue("♠9");
  }).toThrow();
});
test(`Should throw an error`, () => {
  expect(() => {
    getCardValue("♠");
  }).toThrow();
});

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror

