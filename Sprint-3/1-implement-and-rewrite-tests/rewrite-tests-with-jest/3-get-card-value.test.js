// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

// TODO: Write tests in Jest syntax to cover all possible outcomes.
//["♠", "♥", "♦", "♣"];
// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
});
//Case 2: Face Cards(J, Q,K)
test(`Should return 10 when given a face card`, () => {
  expect(getCardValue("J♠")).toEqual(10);
  expect(getCardValue("K♣")).toEqual(10);
  expect(getCardValue("J♦")).toEqual(10);
});
//case 3: Number Cards (2-10)
test(`Should return the number when given a number card`, () => {
  expect(getCardValue("4♠")).toEqual(4);
  expect(getCardValue("9♣")).toEqual(9);
  expect(getCardValue("2♦")).toEqual(2);
});
//Case 4: Invalid cards
test(`Should raise Invalid card error for an invalid Input`, () => {
  expect(() => getCardValue("Apple")).toThrow("Invalid card");
  expect(() => getCardValue("4🎉")).toThrow("Invalid card");
  expect(() => getCardValue("20♣")).toThrow("Invalid card");
});
// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10)
//   Face Cards (J, Q, K)
//   Invalid Cards

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expecttothrowerror
