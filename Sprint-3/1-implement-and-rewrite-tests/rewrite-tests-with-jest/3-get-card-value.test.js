// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return the numeric value for number cards from 2 to 10", () => {
  expect(getCardValue("7♥")).toEqual(7);
  expect(getCardValue("2♥")).toEqual(2);
  expect(getCardValue("10♥")).toEqual(10);
})

// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for face cards", () => {
  const faceCard = getCardValue("J♥");
  expect(faceCard).toEqual(10);
})

// Case 4: Handle Ace (A):
test("should return 11 for ace card", () => {
  const aceCard = getCardValue("A♥");
  expect (aceCard).toEqual(11);
})

// Case 5: Handle Invalid Cards:
test("should return invalid card rank for random numbers", () => {
  expect(getCardValue("85♠")).toEqual("Invalid card rank.");
  expect(getCardValue("1♠")).toEqual("Invalid card rank.");
  expect(getCardValue("")).toEqual("Invalid card rank.");
});
