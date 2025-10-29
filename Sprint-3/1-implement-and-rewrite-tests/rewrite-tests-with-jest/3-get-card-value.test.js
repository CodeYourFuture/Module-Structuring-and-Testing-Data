// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

// Case 2: Handle Number Cards (2-10):
test("should return a number matchig the rank value for number cards", () => {
  const numberCard = getCardValue("5♠");
  expect(numberCard).toEqual(5);
});
// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for Face Cards", () => {
  const faceCard = getCardValue("10♠");
  expect(faceCard).toEqual(10);
});
// Case 4: Handle Ace (A):
test("should return 11 for Ace", () => {
  const aceCard = getCardValue("A◆");
  expect(aceCard).toEqual(11);
});
// Case 5: Handle Invalid Cards:
test("should return invalid card rank for cards that are not in the suite", () => {
  const invalidCard = getCardValue("100♥");
  expect(invalidCard).toEqual("Invalid card rank.");
});

test("should return invalid card rank for cards that are not in the suite", () => {
  const invalidCard = getCardValue("3.1416♥");
  expect(invalidCard).toEqual("Invalid card rank.");
});
