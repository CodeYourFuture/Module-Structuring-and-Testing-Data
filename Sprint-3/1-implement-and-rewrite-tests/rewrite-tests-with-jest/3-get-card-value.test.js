// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
});

// Case 2: Number Cards
test("should return correct numeric value for number cards", () => {
  expect(getCardValue("2♠")).toEqual(2);
  expect(getCardValue("7♦")).toEqual(7);
  expect(getCardValue("10♣")).toEqual(10);
})

// Case 3: Face Cards
test("should return 10 for face cards", () => {
  expect(getCardValue("J♠")).toEqual(10);
  expect(getCardValue("Q♥")).toEqual(10);
  expect(getCardValue("K♦")).toEqual(10);
})

// Case 4: Invalid Cards
test("should throw error for invalid suit", () => {
  expect(() => getCardValue("A?")).toThrow();
})

test("should throw error for invalid rank", () => {
  expect(() => getCardValue("1♠")).toThrow();
});

test("should throw error for missing suit", () => {
  expect(() => getCardValue("A")).toThrow();
});

test("should throw error for completely invalid string", () => {
  expect(() => getCardValue("invalid")).toThrow();
});
// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10)
//   Face Cards (J, Q, K)
//   Invalid Cards

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror

