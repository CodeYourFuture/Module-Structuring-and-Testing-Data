// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
});

// Case 2: Face cards (J, Q, K)
test("should return 10 for face cards", () => {
  expect(getCardValue("J♣")).toEqual(10);
  expect(getCardValue("Q♦")).toEqual(10);
  expect(getCardValue("K♥")).toEqual(10);
});

// Case 3: Number cards (2-10)
test("should return the numeric value for number cards", () => {
  expect(getCardValue("4♠")).toEqual(4);
  expect(getCardValue("9♠")).toEqual(9);
  expect(getCardValue("10♠")).toEqual(10);
});

// Case 4: Invalid cards
test("should throw an error for invalid cards", () => {
  expect(() => getCardValue("invalid")).toThrow();
  expect(() => getCardValue("11♠")).toThrow();
  expect(() => getCardValue("0")).toThrow();
  expect(() => getCardValue("-8♦")).toThrow();
  expect(() => getCardValue("a♣")).toThrow();
  expect(() => getCardValue("KX")).toThrow();
  expect(() => getCardValue("5X")).toThrow();
  expect(() => getCardValue("0x02♠")).toThrow();
  expect(() => getCardValue("2.1♠")).toThrow();
  expect(() => getCardValue("0002♠")).toThrow();
});
