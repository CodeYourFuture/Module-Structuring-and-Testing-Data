// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return 3 for 3 of Spades", () => {
  const threeOfSpades = getCardValue("3♠");
  expect(threeOfSpades).toEqual(3);
});

// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for Jack of Spades", () => {
  const jackOfSpades = getCardValue("J♠");
  expect(jackOfSpades).toEqual(10);
});

// Case 4: Handle Ace (A):
test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 5: Handle Invalid Cards:
test("should return invalid card  for g of spades", () => {
  const gOfSpades = getCardValue("g♠");
  expect(gOfSpades).toEqual("Invalid card rank.");
});