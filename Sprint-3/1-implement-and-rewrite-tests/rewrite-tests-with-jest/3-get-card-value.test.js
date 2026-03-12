// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
});
//   Number Cards (2-10)
test("should return the value of number cards (2–10)", () => {
  expect(getCardValue("2♣")).toEqual(2);
  expect(getCardValue("5♦")).toEqual(5);
  expect(getCardValue("9♥")).toEqual(9);
  expect(getCardValue("10♠")).toEqual(10);
});
//   Face Cards (J, Q, K)
test("should return 10 for face cards", () => {
  expect(getCardValue("J♣")).toEqual(10);
  expect(getCardValue("Q♦")).toEqual(10);
  expect(getCardValue("K♥")).toEqual(10);
});
//   Invalid Cards
test("should throw error for invalid ranks", () => {
  expect(() => getCardValue("11♠")).toThrow();
});

test("should throw error for invalid suits", () => {
  expect(() => getCardValue("A?")).toThrow();
});

test("should throw error for missing suits", () => {
  expect(() => getCardValue("A")).toThrow();
});

test("should throw error for non-string input", () => {
  expect(() => getCardValue(10)).toThrow();
});

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror
  