// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
  expect(getCardValue("A♥")).toEqual(11);
  expect(getCardValue("A♣")).toEqual(11);
});

// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10)
test(`Should return number when given an 2-10 card`, () => {
  expect(getCardValue("8♠")).toEqual(8);
  expect(getCardValue("5♥")).toEqual(5);
  expect(getCardValue("9♣")).toEqual(9);
  expect(getCardValue("2♥")).toEqual(2);
  expect(getCardValue("7♦")).toEqual(7);
});
//   Face Cards (J, Q, K)
test(`Should return 10 when given a face card`, () => {
  expect(getCardValue("J♠")).toEqual(10);
  expect(getCardValue("Q♣")).toEqual(10);
  expect(getCardValue("K♥")).toEqual(10);
  expect(getCardValue("J♦")).toEqual(10);
});

//   Invalid Cards
test(`Should return Invalid when given an Invalid card`, () => {
  expect(() => getCardValue("11♠")).toThrow("Invalid card");
  expect(() => getCardValue("01♥")).toThrow("Invalid card");
  expect(() => getCardValue("1♣")).toThrow("Invalid card");
  expect(() => getCardValue("K♠♣")).toThrow("Invalid card");
  expect(() => getCardValue("QQ♥")).toThrow("Invalid card");
  expect(() => getCardValue("")).toThrow("Invalid card");
});

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror

