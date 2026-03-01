// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
});

// Case 2: Number Cards (2-10)
test(`Should return number when given a number`, () => {
  expect(getCardValue("2♠")).toEqual(2);
  expect(getCardValue("10♠")).toEqual(10);
  expect(getCardValue("5♠")).toEqual(5);
});

// Case 3: Face Cards (J, Q, K)
test(`Should return 10 when given a face card`, () => {
  expect(getCardValue("Q♠")).toEqual(10);
  expect(getCardValue("K♠")).toEqual(10);
  expect(getCardValue("J♠")).toEqual(10);
});

// Case 4: Invalid Cards
test(`Should return Invalid Card when given an invalid card`, () => {
  expect(getCardValue("Aas♠")).toEqual("Invalid card");
  expect(getCardValue("What")).toEqual("Invalid card");
  expect(getCardValue("Q10")).toEqual("Invalid card");
  expect(getCardValue("11")).toEqual("Invalid card");
  expect(getCardValue("♠11")).toEqual("Invalid card");
  expect(getCardValue("10*")).toEqual("Invalid card");
  expect(getCardValue("Q_")).toEqual("Invalid card");
  expect(getCardValue("A10")).toEqual("Invalid card");
});

// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10)
//   Face Cards (J, Q, K)
//   Invalid Cards

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror
