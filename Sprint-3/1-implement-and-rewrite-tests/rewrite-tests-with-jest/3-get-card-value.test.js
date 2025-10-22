// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

// Case 1: Handle Ace
test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10)
// When the card is "2" to "10", it should return the numeric value
test("should return the correct value for number cards", () => {
  expect(getCardValue("5♥")).toEqual(5);
  expect(getCardValue("2♦")).toEqual(2);
  expect(getCardValue("10♣")).toEqual(10);
});

// Case 3: Handle Face Cards (J, Q, K)
// When the card is "J", "Q", or "K", it should return 10
test("should return 10 for face cards J, Q, K", () => {
  expect(getCardValue("J♣")).toEqual(10);
  expect(getCardValue("Q♥")).toEqual(10);
  expect(getCardValue("K♠")).toEqual(10);
});

// Case 4: Handle Ace (already handled in Case 1, but can check another suit)
test("should return 11 for Ace of Hearts", () => {
  expect(getCardValue("A♥")).toEqual(11);
});

// Case 5: Handle Invalid Cards
// If the card rank is invalid, it should throw an error
test("should throw error for invalid cards", () => {
  expect(() => getCardValue("X♠")).toThrow("Invalid card rank.");
  expect(() => getCardValue("11♣")).toThrow("Invalid card rank.");
});
