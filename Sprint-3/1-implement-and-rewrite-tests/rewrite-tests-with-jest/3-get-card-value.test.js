// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
  expect(getCardValue("A♦")).toEqual(11);
  expect(getCardValue("A♠")).toEqual(11);
});

// Case 2: Face cards Jack, Queen, King (J,Q,K)
test(`Should return 10 when given a face card`, () => {
  expect(getCardValue("J♠")).toEqual(10);
  expect(getCardValue("J♦")).toEqual(10);
  expect(getCardValue("Q♣")).toEqual(10);
  expect(getCardValue("K♥")).toEqual(10);
});

// Case 3: Number cards 2-10 (2,3,4,5,6,7,8,9)
test(`Should return the card value when given a number card`, () => {
  expect(getCardValue("2♠")).toEqual(2);
  expect(getCardValue("3♦")).toEqual(3);
  expect(getCardValue("4♣")).toEqual(4);
  expect(getCardValue("5♥")).toEqual(5);
  expect(getCardValue("6♠")).toEqual(6);
  expect(getCardValue("7♦")).toEqual(7);
  expect(getCardValue("8♣")).toEqual(8);
  expect(getCardValue("9♥")).toEqual(9);
});

// Case 4: Invalid card
// test(`Should return invalid as the case is not valid`, () => {
//   expect(getCardValue("invalid")).toEqual("invalid");
//   expect(getCardValue("♦")).toEqual("invalid");
//   expect(getCardValue("4")).toEqual("invalid");
//   expect(getCardValue("")).toEqual("invalid");
//   expect(getCardValue("m")).toEqual("invalid");
//   expect(getCardValue("300")).toEqual("invalid");
// });
test("throw an error as the case is not valid but in right format", () => {
  expect(() => {
    getCardValue("92");
  }).toThrow();
  expect(() => {
    getCardValue("♦");
  }).toThrow();
  expect(() => {
    getCardValue("A");
  }).toThrow();
  expect(() => {
    getCardValue("*");
  }).toThrow();
  expect(() => {
    getCardValue("");
  }).toThrow();
  expect(() => {
    getCardValue(2);
  }).toThrow();
});

// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10)
//   Face Cards (J, Q, K)
//   Invalid Cards

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror

