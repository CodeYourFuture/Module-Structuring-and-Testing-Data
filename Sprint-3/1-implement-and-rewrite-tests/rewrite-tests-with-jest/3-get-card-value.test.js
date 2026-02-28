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
//   Face Cards (J, Q, K)
//   Invalid Cards

// Case 2: Number Cards (2-10)
test(`Should return correct value for number cards (2-10)`, () => {
  expect(getCardValue("9♠")).toEqual(9);
  expect(getCardValue("5♦")).toEqual(5);
  expect(getCardValue("10♣")).toEqual(10);
  expect(getCardValue("2♠")).toEqual(2);
});

// Case 3: Face cards (J, Q, K)
test(`Should return 10 for face cards (J, Q, K)`, () => {
  expect(getCardValue("J♥")).toEqual(10);
  expect(getCardValue("Q♦")).toEqual(10);
  expect(getCardValue("K♣")).toEqual(10);
});

// Case 4: Invalid Cards
test(`Should throw error for invalid cards`, () => {
  expect(() => getCardValue("invalid")).toThrow();
  // too short
  expect(() => getCardValue("A")).toThrow();
  // invalid rank
  expect(() => getCardValue("X♠")).toThrow();
  // invalid suit
  expect(() => getCardValue("Kx")).toThrow();
  // missing suit
  expect(() => getCardValue("10")).toThrow();
  // empty string
  expect(() => getCardValue("")).toThrow();
});

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror
