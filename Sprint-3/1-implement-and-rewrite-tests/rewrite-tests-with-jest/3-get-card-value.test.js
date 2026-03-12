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

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror

// Case 2: Number cards
test("should return the numeric value when given a valid number card", () => {
  expect(getCardValue("2♠")).toEqual(2);
  expect(getCardValue("9♠")).toEqual(9);
  expect(getCardValue("10♥")).toEqual(10);
});

// Case 3: Face cards
test("should return 10 when given a face card", () => {
  expect(getCardValue("J♣")).toEqual(10);
  expect(getCardValue("Q♦")).toEqual(10);
  expect(getCardValue("K♥")).toEqual(10);
});

// Case 4: Invalid cards
test("should throw an error for invalid card strings", () => {
  expect(() => getCardValue("invalid")).toThrow();
  expect(() => getCardValue("1♠")).toThrow();
  expect(() => getCardValue("11♠")).toThrow();
  expect(() => getCardValue("A")).toThrow();
  expect(() => getCardValue("♠")).toThrow();
});

// Case 5: Invalid numeric literal strings
test("should throw an error for strings that JavaScript can coerce to numbers but are not valid card ranks", () => {
  expect(() => getCardValue("0x02♠")).toThrow();
  expect(() => getCardValue("2.1♠")).toThrow();
  expect(() => getCardValue("0002♠")).toThrow();
});
