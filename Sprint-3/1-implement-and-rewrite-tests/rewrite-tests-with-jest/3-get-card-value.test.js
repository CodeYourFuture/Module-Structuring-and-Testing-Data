// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11)});
// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10)
test(`Should return a number given 9 card` , ()=> {
  expect(getCardValue("9♠")).toEqual(9)});
//   Face Cards (J, Q, K)
test(`Should return 10 when given a Queen card`, () => {
  expect(getCardValue("Q♥")).toEqual(10);
});
test(`Should return 10 when given a King card`, () => {
  expect(getCardValue("K♦")).toEqual(10);
});

test(`Should return 10 when given a Jack card`, () => {
  expect(getCardValue("J♣")).toEqual(10);
});

//   Invalid Cards
test('Should throw "Invalid card" for "invalid"', () => {
  expect(() => getCardValue("invalid")).toThrow("Invalid card");
});

test('Should throw "Invalid card" for input "789"', () => {
  expect(() => getCardValue("789")).toThrow("Invalid card");
});

test('Should throw "Invalid card" for input ""', () => {
  expect(() => getCardValue("")).toThrow("Invalid card");
});

test('Should throw "Invalid card" for input "♠♥♦♣"', () => {
  expect(() => getCardValue("♠♥♦♣")).toThrow("Invalid card");
});

test('Should throw "Invalid card" for input "5$"', () => {
  expect(() => getCardValue("5$")).toThrow("Invalid card");
});

test('Should throw "Invalid card" for input "£50"', () => {
  expect(() => getCardValue("£50")).toThrow("Invalid card");
});


// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror

