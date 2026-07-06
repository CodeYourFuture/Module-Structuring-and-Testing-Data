// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♣")).toEqual(11);
  expect(getCardValue("A♠")).toEqual(11);
  expect(getCardValue("A♥")).toEqual(11);
  expect(getCardValue("A♦")).toEqual(11);
});

// Case 2: Number Cards (2-10)
test(`Should return a value equal to the number on the card`, () => {
  expect(getCardValue("2♠")).toEqual(2);
  expect(getCardValue("5♥")).toEqual(5);
  expect(getCardValue("9♦")).toEqual(9);
  expect(getCardValue("10♣")).toEqual(10);
});

// Case 3: Face Cards (J, Q, K)
test(`Should return 10 when given a face card`, () => {
  expect(getCardValue("K♥")).toEqual(10);
  expect(getCardValue("J♠")).toEqual(10);
  expect(getCardValue("Q♦")).toEqual(10);
});

// Case 4: Invalid Cards
test(`All invalid cards should throw an Invalid error`, () => {
  expect(() => getCardValue("9")).toThrow(/Invalid/); // missing suit
  expect(() => getCardValue("♥")).toThrow(/Invalid/); // missing rank
  expect(() => getCardValue("1♠")).toThrow(/Invalid/); // invalid rank
  expect(() => getCardValue("11♠")).toThrow(/Invalid/); // rank too high
  expect(() => getCardValue("9X")).toThrow(/Invalid/); // invalid suit
  expect(() => getCardValue("♠9")).toThrow(/Invalid/); // wrong order
  expect(() => getCardValue("9 ♠")).toThrow(/Invalid/); // space inside
  expect(() => getCardValue("9♠ ")).toThrow(/Invalid/); // space after
  expect(() => getCardValue("")).toThrow(/Invalid/); // empty string
  expect(() => getCardValue("j♠")).toThrow(/Invalid/); // lowercase
});
// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror
