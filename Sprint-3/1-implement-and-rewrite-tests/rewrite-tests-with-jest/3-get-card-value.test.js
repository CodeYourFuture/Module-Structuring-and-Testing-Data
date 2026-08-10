// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
});

// Suggestion: Group the remaining test data into these categories:

// Case 2: Number Cards (2-10)
test(`Should return the same number when given a number card of any suit`, () => {
  expect(getCardValue("3♠")).toEqual(3);
  expect(getCardValue("5♥")).toEqual(5);
  expect(getCardValue("9♦")).toEqual(9);
  expect(getCardValue("10♣")).toEqual(10);
});

// Case 3: Valid Suits
test("Should accept all valid suits", () => {
  expect(getCardValue("A♠")).toEqual(11);
  expect(getCardValue("A♥")).toEqual(11);
  expect(getCardValue("A♦")).toEqual(11);
  expect(getCardValue("A♣")).toEqual(11);
});

// Case 4: Face Cards (J, Q, K)
test(`Should return 10 when given an any face card`, () => {
  expect(getCardValue("J♠")).toEqual(10);
  expect(getCardValue("Q♥")).toEqual(10);
  expect(getCardValue("K♦")).toEqual(10);
});

//   Invalid Cards

// Test 5: Non-suit inputs
test("Cards without suits throw an error", () => {
  expect(() => {
    getCardValue("10");
  }).toThrow("Invalid card");
});

// Test 6: Invalid suits
test("Should throw an error for an invalid suit", () => {
  expect(() => getCardValue("A★")).toThrow("Invalid card");
});

// Test 7: Invalid rank
test("Should throw an error for an invalid rank", () => {
  expect(() => getCardValue("Z♠")).toThrow("Invalid card");
});

// Test 8: Invalid input
test("Should throw an error for an invalid card", () => {
  expect(() => getCardValue("hello")).toThrow("Invalid card");
});

// Test 9: Reject lowercase card ranks
test("Should reject lowercase card ranks", () => {
  expect(() => getCardValue("a♠")).toThrow("Invalid card");
  expect(() => getCardValue("j♠")).toThrow("Invalid card");
  expect(() => getCardValue("q♠")).toThrow("Invalid card");
  expect(() => getCardValue("k♠")).toThrow("Invalid card");
});

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror
