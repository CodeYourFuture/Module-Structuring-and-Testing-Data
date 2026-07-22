// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
});

// Suggestion: Group the remaining test data into these categories:
//   Case 2 Number Cards (2-10)
  test(`Should return the same number when given a number card of any suit`, () => {
  expect(getCardValue("3♠")).toEqual(3);
});

//   Case 3 Face Cards (J, Q, K)
test(`Should return 10 when given an any face card`, () => {
  expect(getCardValue("J♠")).toEqual(10);
  expect(getCardValue("Q♥")).toEqual(10)
  expect(getCardValue("K♦")).toEqual(10)
});


//   Invalid Cards
// test(`Cards without suits return as Invalid card`, () => {
//   expect(getCardValue("10")).toEqual(new Error);
// });
test('Cards without suits return as Invalid card', () => {
  expect(() => {
    getCardValue("10");
  }).toThrow("Invalid card");
});
// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror

