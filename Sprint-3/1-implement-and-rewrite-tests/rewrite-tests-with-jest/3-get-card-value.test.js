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

test("Should return the numeric value for cards 2 through 10", () => {
  expect(getCardValue("2♥")).toBe(2);
  expect(getCardValue("7♦")).toBe(7);
  expect(getCardValue("10♣")).toBe(10);
});

test("should return 10 for all face cards (J, Q, K)", () => {
  expect(getCardValue("J♠")).toBe(10);
  expect(getCardValue("Q♥")).toBe(10);
  expect(getCardValue("K♦")).toBe(10);
});

test("Should throw an error for invalid card strings", () => {
  expect(() => getCardValue("1♠")).toThrow("Invalid card");
  expect(() => getCardValue("A-Z")).toThrow("Invalid card");
  expect(() => getCardValue("Joker")).toThrow("Invalid card");
  expect(() => getCardValue("")).toThrow("Invalid card");
  expect(() => getCardValue("5⋆")).toThrow("Invalid card");
});

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror

