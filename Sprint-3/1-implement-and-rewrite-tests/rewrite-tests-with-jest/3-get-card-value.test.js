// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

test("should return 5 for 5 of Hearts", () => {
  const fiveofHearts = getCardValue("5♥");
  expect(fiveofHearts).toEqual(5);
});

test("should return 10 for Face Cards", () => {
  const faceCards = getCardValue("10" || "J" || "Q" || "K");
  expect(faceCards).toEqual(10);
});

// Case 4: Handle Ace (A):
test("should return 11 for Aces", () => {
  const anyAce = getCardValue("A");
  expect(anyAce).toEqual(11);
});

// Case 5: Handle Invalid Cards:
test("should return 'Invalid card rank.' for invalid cards", () => {
  const invalidCard = getCardValue("z");
  expect(invalidCard).toEqual("Invalid card rank.");
});
