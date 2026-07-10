// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
});

// Number cards (2–10)
test('returns correct numeric values for number cards', () => {
    expect(getCardValue("2♠")).toEqual(2);
    expect(getCardValue("5♥")).toEqual(5);
    expect(getCardValue("9♦")).toEqual(9);
    expect(getCardValue("10♣")).toEqual(10);
});

// Face cards
test('returns 10 for face cards', () => {
    expect(getCardValue("J♠")).toEqual(10);
    expect(getCardValue("Q♥")).toEqual(10);
    expect(getCardValue("K♦")).toEqual(10);
});

// Ace
test('returns 11 for Ace', () => {
    expect(getCardValue("A♣")).toEqual(11);
});

// Invalid cards
test('invalid card strings should throw an error', () => {
    expect(() => getCardValue("A")).toThrow();
    expect(() => getCardValue("B")).toThrow();
});
// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror

