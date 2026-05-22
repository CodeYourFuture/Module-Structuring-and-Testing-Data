// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
  expect(getCardValue("A♥")).toEqual(11);
});

// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10)
//   Face Cards (J, Q, K)
//   Invalid Cards

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror

// Number cards -> return their numeric value (2-10)
test("should return the numeric value for number cards", () => {
  expect(getCardValue("2♦")).toEqual(2); // boundary: lowest number card
  expect(getCardValue("9♣")).toEqual(9);
  expect(getCardValue("10♥")).toEqual(10); // boundary: highest number card
});

//Face cards -> Jack, Queen and King are all worth 10
test("should return 10 for face cards (J, Q, K)", () => {
  expect(getCardValue("J♣")).toEqual(10);
  expect(getCardValue("Q♦")).toEqual(10);
  expect(getCardValue("K♠")).toEqual(10);
});

// Invalid cards -> function should throw an error
// We wrap the call in () => so Jest can catch the error without crashing the test
// MDN on arrow functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
test("should throw an error for invalid cards", () => {
  expect(() => getCardValue("invalid")).toThrow();
  expect(() => getCardValue("1♠")).toThrow(); // 1 is not a valid rank
  expect(() => getCardValue("")).toThrow(); // empty string
});
