// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");


// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
});

// Suggestion: Group the remaining test data into these categories: //   ♠ ♥ ♦ ♣
//   Number Cards (2-10)
test(`Should return the card's numeric rank for cards 2 through 10`, () =>{
  expect(getCardValue("2♠")).toEqual(2);
  expect(getCardValue("3♥")).toEqual(3);
  expect(getCardValue("4♦")).toEqual(4);
  expect(getCardValue("5♣")).toEqual(5);
  expect(getCardValue("6♠")).toEqual(6);
  expect(getCardValue("7♥")).toEqual(7);
  expect(getCardValue("8♦")).toEqual(8);
  expect(getCardValue("9♣")).toEqual(9);
  expect(getCardValue("10♠")).toEqual(10);

})
//   Face Cards (J, Q, K)
test(`should return 10 When the card is a face card ("J", "Q", "K")`, () => {
  expect(getCardValue("j♠")).toEqual(10);
  expect(getCardValue("k♦")).toEqual(10);
  expect(getCardValue("q♣")).toEqual(10);

})
//   Invalid Cards
test("should throw an error when an invalid card is played", () => {
  expect(() => getCardValue("")).toThrow("No card was played");
  expect(() => getCardValue("1009♣")).toThrow("Invalid card played, rank and suit cannot be less " +
      "than 1 or more than 3")

});



// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror

