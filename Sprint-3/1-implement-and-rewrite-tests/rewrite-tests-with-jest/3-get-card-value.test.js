// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)  ♣ ♦ ♥ C
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
  expect(getCardValue("A♥")).toEqual(11);
  expect(getCardValue("A♦")).toEqual(11);
  expect(getCardValue("A♣")).toEqual(11);
});

// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10)
//   Face Cards (J, Q, K)
//   Invalid Cards

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror

// Number cards
test(`Should return the number when given a number card`, () => {
  expect(getCardValue("2♠")).toEqual(2);
  expect(getCardValue("7♥")).toEqual(7);
  expect(getCardValue("9♦")).toEqual(9);
  expect(getCardValue("6♣")).toEqual(6);
});

// Face Cards (J, Q, K)
test(`Should return 10 when  given a face card`, () => {
  expect(getCardValue("J♠")).toEqual(10);
  expect(getCardValue("Q♥")).toEqual(10);
  expect(getCardValue("K♦")).toEqual(10);
});

// Invalid Cards
test(`Should throw an error when given an invalid card`, () => {
  expect(() => getCardValue("1♣")).toThrow("Invalid Card");
  expect(() => getCardValue("Z♦")).toThrow("Invalid Card");
  expect(() => getCardValue("12♦")).toThrow("Invalid Card");
  expect(() => getCardValue("♦3")).toThrow("Invalid Card");
  expect(() => getCardValue("")).toThrow("Invalid Card");
  expect(() => getCardValue("invalid")).toThrow("Invalid Card");
  expect(() => getCardValue("----")).toThrow("Invalid Card");
});
