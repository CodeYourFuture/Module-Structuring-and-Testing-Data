// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
});

// Number cards
test("Should return 2 for 2♣", () => {
  expect(getCardValue("2♣")).toEqual(2);
});

test("Should return 10 for 10♥", () => {
  expect(getCardValue("10♥")).toEqual(10);
});

// Face cards
test("Should return 10 for J♦", () => {
  expect(getCardValue("J♦")).toEqual(10);
});

test("Should return 10 for Q♠", () => {
  expect(getCardValue("Q♠")).toEqual(10);
});

test("Should return 10 for K♣", () => {
  expect(getCardValue("K♣")).toEqual(10);
});

// =========================================================
// INVALID CARDS
// =========================================================

test("Should throw an error for 1♠", () => {
  expect(() => getCardValue("1♠")).toThrowError();
});

test("Should throw an error for A?", () => {
  expect(() => getCardValue("A?")).toThrowError();
});

test("Should throw an error for empty string", () => {
  expect(() => getCardValue("")).toThrowError();
});

test("Should throw an error for 11♣", () => {
  expect(() => getCardValue("11♣")).toThrowError();
});

test("Should throw an error for invalid rank", () => {
  expect(() => getCardValue("Z♦")).toThrowError();
});

test("Should throw an error for missing rank", () => {
  expect(() => getCardValue("♠")).toThrowError();
});

// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10)
//   Face Cards (J, Q, K)
//   Invalid Cards

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror

