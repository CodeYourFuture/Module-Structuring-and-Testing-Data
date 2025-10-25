// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return 3 for 3 of Clubs", () => {
  expect(getCardValue("3♣")).toEqual(3);
});

test("should return 7 for 7 of Spades", () => {
  expect(getCardValue("7♠")).toEqual(7);
});

test("should return 9 for 9 of Diamonds", () => {
  expect(getCardValue("9♦")).toEqual(9);
});

// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for Jack of Clubs", () => {
  expect(getCardValue("J♦")).toEqual(10);
});

test("should return 10 for Queen of Spades", () => {
  expect(getCardValue("Q♣")).toEqual(10);
});

test("should return 10 for King of Hearts", () => {
  expect(getCardValue("K♠")).toEqual(10);
});
// Case 4: Handle Ace (A):
test("should return 11 for Ace of Diamonds", () => {
  expect(getCardValue("A♦")).toEqual(11);
});
// Case 5: Handle Invalid Cards:
test("should return null for invalid card 'B'", () => {
  expect(getCardValue("Z♠")).toBeNull();
});