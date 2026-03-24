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
test("Should return the value of the card in interval of [2,10]", () => {
  expect(getCardValue("2♠")).toEqual(2);

  expect(getCardValue("5♥")).toEqual(5);

  expect(getCardValue("9♦")).toEqual(9);

  expect(getCardValue("10♣")).toEqual(10);
});

//   Face Cards (J, Q, K)
test("Should return 10 for 'J♠'", () => {
  expect(getCardValue("J♠")).toEqual(10);
});

test("Should return 10 for 'Q♥'", () => {
  expect(getCardValue("Q♥")).toEqual(10);
});

test("Should return 10 for 'K♦'", () => {
  expect(getCardValue("K♦")).toEqual(10);
});

//   Invalid Cards
test("Should throw error for missing suit (e.g., 'A')", () => {
  expect(() => getCardValue("A")).toThrow("Invalid card");
});

test("Should throw error for missing rank (e.g., '♠')", () => {
  expect(() => getCardValue("♠")).toThrow("Invalid card");
});

test("Should throw error for null", () => {
  expect(() => getCardValue(null)).toThrow("Invalid card");
});

test("Should throw error for undefined", () => {
  expect(() => getCardValue(undefined)).toThrow("Invalid card");
});

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror
