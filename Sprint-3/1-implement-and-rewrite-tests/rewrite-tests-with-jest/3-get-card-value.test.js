// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
});

// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10)
//   Face Cards (J, Q, K)
//   Invalid Cards

// Case 2 : Number(2-10)
test('should return the exact number when given an number card', () =>{
  expect(getCardValue("5♠")).toEqual(5);
})

//case 3 : face card(J,Q,K)
test('should return number when given face card', () =>{
  expect(getCardValue("K♠")).toEqual(10);
})

// case 4: Invalid cards
test('throws new Error', () => {
  expect(() => getCardValue("9**")).toThrow("Invalid card");
});

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror

