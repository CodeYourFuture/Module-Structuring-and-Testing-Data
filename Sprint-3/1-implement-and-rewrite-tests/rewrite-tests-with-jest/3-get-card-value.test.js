// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
// test("should return 10 for number cards from 1 to 10", () => {
//   const numberCards = getCardValue("8♥");
//   expect(numberCards.toEqual(10));
// })
// Case 3: Handle Face Cards (J, Q, K):
// Case 4: Handle Ace (A):
// Case 5: Handle Invalid Cards:
test("should return invalid card rank for random numbers", () => {
  const invalidRandomCard = getCardValue("85♠");
  expect(invalidRandomCard).toEqual("Invalid card rank.");
});
