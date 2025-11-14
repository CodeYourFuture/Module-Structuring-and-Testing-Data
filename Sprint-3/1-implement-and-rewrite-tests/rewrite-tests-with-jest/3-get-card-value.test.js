// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
// When the card is a number between 2 and 10,
// Then the function should return the numeric value of the card
test("should return numeric value for number cards 2-10", () => {
  expect(getCardValue("5♥")).toEqual(5);
  expect(getCardValue("10♦")).toEqual(10);
});

// Case 3: Handle Face Cards (J, Q, K):
// When the card is J, Q, or K,
// Then the function should return 10
test("should return 10 for face cards J, Q, K", () => {
  expect(getCardValue("J♣")).toEqual(10);
  expect(getCardValue("Q♠")).toEqual(10);
  expect(getCardValue("K♦")).toEqual(10);
});

// Case 4: Handle Ace (A):
// When the card is an Ace,
// Then the function should return 11
test("should return 11 for Ace cards", () => {
  expect(getCardValue("A♥")).toEqual(11);
});

// Case 5: Handle Invalid Cards:
// When the card has an invalid rank,
// Then the function should throw an error
test("should throw an error for invalid cards", () => {
  expect(() => getCardValue("Z♠")).toThrow("Invalid card rank.");
});
