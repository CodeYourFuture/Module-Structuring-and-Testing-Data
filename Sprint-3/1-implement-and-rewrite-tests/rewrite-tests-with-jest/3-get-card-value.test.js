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
test(`Should return the numeric value when the card is a number card ("2" to "10")`, () => {
  const numberCards = [
    { card: "2", value: 2 },
    { card: "3", value: 3 },
    { card: "4", value: 4 },
    { card: "5", value: 5 },
    { card: "6", value: 6 },
    { card: "7", value: 7 },
    { card: "8", value: 8 },
    { card: "9", value: 9 },
    { card: "10", value: 10 }
  ];

  numberCards.forEach(({ card, value }) => {
    expect(getCardValue(card)).toEqual(value);
  });
  //   Face Cards (J, Q, K)
  test(`Should return 10 when given face card ("J", "Q", "K")`, () => {
    expect(getCardValue("J♣")).toEqual(10);
  });

  test(`Should return 10 when given face card ("J", "Q", "K")`, () => {
    expect(getCardValue("Q♦")).toEqual(10);
  });

  test(`Should return 10 when given face card ("J", "Q", "K")`, () => {
    expect(getCardValue("K♦")).toEqual(10);
  });

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror

