// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
  expect(() => getCardValue("AA♠")).toThrow(Error);
});

// Case 2
test(`Should return 10 when given a jack, queen, king`, () => {
  expect(getCardValue("J♠")).toEqual(10);
  expect(getCardValue("Q♥")).toEqual(10);
  expect(getCardValue("K♠")).toEqual(10);
  expect(() => getCardValue("K🤣")).toThrow(
    "Invalid last character detected, only suits(♠♥♦♣) are allowed, but got this character:"
  );
  expect(() => getCardValue("KKW🤣")).toThrow(Error);
});

// Case 3
test(`Should return number when given a number`, () => {
  expect(getCardValue("2♠")).toEqual(2);
  expect(getCardValue("10♥")).toEqual(10);
  expect(() => getCardValue("0♠")).toThrow(Error);
  expect(() => getCardValue("1♠")).toThrow(Error);
  expect(() => getCardValue("10Q")).toThrow(Error);
  expect(() => getCardValue("423🤣")).toThrow(Error);
});

test("Should return error on invalid input", () => {
  expect(() => getCardValue(null)).toThrow(Error);
  expect(() => getCardValue(undefined)).toThrow(Error);
  expect(() => getCardValue(12398)).toThrow(Error);
  expect(() => getCardValue(NaN)).toThrow(Error);
  expect(() => getCardValue("♠")).toThrow(Error);
});

// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10)
//   Face Cards (J, Q, K)
//   Invalid Cards

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror
