// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
  expect(getCardValue("A♦")).toEqual(11);
  expect(getCardValue("A♥")).toEqual(11);
  expect(getCardValue("A♣")).toEqual(11);
});

// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10)
test(`Should return the number value of a card when given an a number card`, () => {
  expect(getCardValue("7♠")).toEqual(7);
  expect(getCardValue("10♠")).toEqual(10);
  expect(getCardValue("2♦")).toEqual(2);
  expect(getCardValue("5♥")).toEqual(5);
  expect(getCardValue("10♣")).toEqual(10);
});

//   Face Cards (J, Q, K)
test(`Should return 10 when given a face card`, () => {
  expect(getCardValue("J♦")).toEqual(10);
  expect(getCardValue("Q♠")).toEqual(10);
  expect(getCardValue("K♠")).toEqual(10);
  expect(getCardValue("K♦")).toEqual(10);
  expect(getCardValue("J♥")).toEqual(10);
  expect(getCardValue("Q♣")).toEqual(10);
});

//   Invalid Cards
test(`Should throw an error when given an invalid card`, () => {
  expect(() => getCardValue("")).toThrow(
    "Invalid card format! Expected rank followed by suit, for example A♠, 10♥, K♦, or 7♣."
  );
  expect(() => getCardValue("invalid")).toThrow(
    "Invalid card format! Expected rank followed by suit, for example A♠, 10♥, K♦, or 7♣."
  );
  expect(() => getCardValue("11♠")).toThrow(
    "Invalid card format! Expected rank followed by suit, for example A♠, 10♥, K♦, or 7♣."
  );
  expect(() => getCardValue("0♦")).toThrow(
    "Invalid card format! Expected rank followed by suit, for example A♠, 10♥, K♦, or 7♣."
  );
  expect(() => getCardValue("4.8♣")).toThrow(
    "Invalid card format! Expected rank followed by suit, for example A♠, 10♥, K♦, or 7♣."
  );
  expect(() => getCardValue("G♦")).toThrow(
    "Invalid card format! Expected rank followed by suit, for example A♠, 10♥, K♦, or 7♣."
  );
  expect(() => getCardValue("9")).toThrow(
    "Invalid card format! Expected rank followed by suit, for example A♠, 10♥, K♦, or 7♣."
  );
  expect(() => getCardValue("K")).toThrow(
    "Invalid card format! Expected rank followed by suit, for example A♠, 10♥, K♦, or 7♣."
  );
  expect(() => getCardValue(6)).toThrow(
    "Invalid card format! Expected rank followed by suit, for example A♠, 10♥, K♦, or 7♣."
  );
  expect(() => getCardValue("♠3")).toThrow(
    "Invalid card format! Expected rank followed by suit, for example A♠, 10♥, K♦, or 7♣."
  );
  expect(() => getCardValue("9M")).toThrow(
    "Invalid card format! Expected rank followed by suit, for example A♠, 10♥, K♦, or 7♣."
  );
});

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror
