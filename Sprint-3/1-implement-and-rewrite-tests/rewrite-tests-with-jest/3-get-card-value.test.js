// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
});

// Case 2: Number cards (2–10)
test("should return numeric value for number cards", () => {
  expect(getCardValue("2♠")).toBe(2);
  expect(getCardValue("5♥")).toBe(5);
  expect(getCardValue("10♦")).toBe(10);
  expect(getCardValue("7♣")).toBe(7);
});

// Case 3: Face cards
test("should return 10 for face cards", () => {
  expect(getCardValue("J♠")).toBe(10);
  expect(getCardValue("Q♥")).toBe(10);
  expect(getCardValue("K♦")).toBe(10);
  expect(getCardValue("J♣")).toBe(10);
});

// Case 4: Invalid rank
test("should throw error for invalid rank", () => {
  expect(() => getCardValue("1♠")).toThrow();
  expect(() => getCardValue("11♠")).toThrow();
  expect(() => getCardValue("Z♠")).toThrow();
});

// Case 5: Invalid suit
test("should throw error for invalid suit", () => {
  expect(() => getCardValue("A★")).toThrow();
  expect(() => getCardValue("10X")).toThrow();
  expect(() => getCardValue("5?")).toThrow();
});

// Case 6: Malformed input
test("should throw error for malformed card strings", () => {
  expect(() => getCardValue("")).toThrow();
  expect(() => getCardValue("♠A")).toThrow();
  expect(() => getCardValue("A♠♠")).toThrow();
  expect(() => getCardValue("10")).toThrow();
});

// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10)
//   Face Cards (J, Q, K)
//   Invalid Cards

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror
