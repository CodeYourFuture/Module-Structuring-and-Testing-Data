// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
});
//Case 2: Face Cards (J, Q, K)
test(`Should return 10 when given a Face Cards`, () => {
  expect(getCardValue("J♣")).toEqual(10);
  expect(getCardValue("K♦")).toEqual(10);
  expect(getCardValue("Q♥")).toEqual(10);
});
//Case 3:  Number Cards (2-10)
test(`Should return the Number it self when a given Number card`, () => {
  expect(getCardValue("2♣")).toEqual(2);
  expect(getCardValue("10♦")).toEqual(10);
  expect(getCardValue("4♥")).toEqual(4);
  expect(getCardValue("6♣")).toEqual(6);
  expect(getCardValue("7♠")).toEqual(7);
  expect(getCardValue("9♥")).toEqual(9);
});
// Invalid Cards
test(`Should return Invalid Cards when given Invalid Cards`, () => {
  expect(getCardValue("22♣")).toEqual("Invalid Cards");
  expect(getCardValue("11♦")).toEqual("Invalid Cards");
  expect(getCardValue("4♥♥")).toEqual("Invalid Cards");
  expect(getCardValue("")).toEqual("Invalid Cards");
  expect(getCardValue("♠")).toEqual("Invalid Cards");
  expect(getCardValue("-9♥")).toEqual("Invalid Cards");
});

// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10)
//   Face Cards (J, Q, K)
//   Invalid Cards

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror
