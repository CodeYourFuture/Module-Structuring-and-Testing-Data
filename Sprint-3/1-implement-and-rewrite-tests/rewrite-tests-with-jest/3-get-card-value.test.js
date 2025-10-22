// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return a number matchig the rank value for given card", () => {
  const numberCard = getCardValue("5♠");
  expect(numberCard).toEqual(5);
});
// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for Face Cards", () => {
  const faceCard = getCardValue("K♠");
  expect(faceCard).toEqual(10);
});
// Case 4: Handle Ace (A):
test("should return 11 for Ace", () => {
  const aceCard = getCardValue("A◆");
  expect(aceCard).toEqual(11);
});
// Case 5: Handle Invalid Cards:
test("should return 11 for Ace of Spades", () => {
  const invalidCard = getCardValue("1♥");
  expect(invalidCard).toEqual("Invalid card rank.");
});
