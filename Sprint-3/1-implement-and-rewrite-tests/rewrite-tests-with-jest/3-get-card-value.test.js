// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceOfSpades = getCardValue("A♠");
  expect(aceOfSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return 9 for Nine of Hearts", () => {
  const nineOfHearts = getCardValue("9♥");
  expect(nineOfHearts).toEqual(9);
});
test("should return 5 for Five of Hearts", () => {
  const fiveOfHearts = getCardValue("5♥");
  expect(fiveOfHearts).toEqual(5);
});
test("should return 2 for Two of Diamonds", () => {
  const twoOfDiamonds = getCardValue("2♦");
  expect(twoOfDiamonds).toEqual(2);
});
// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for King of Diamonds", () => {
  const kingOfDiamonds = getCardValue("K♦");
  expect(kingOfDiamonds).toEqual(10);
});
test("should return 10 for Queen of Clubs", () => {
  const queenOfClubs = getCardValue("Q♣");
  expect(queenOfClubs).toEqual(10);
});
test("should return 10 for Jack of Hearts", () => {
  const jackOfHearts = getCardValue("J♥");
  expect(jackOfHearts).toEqual(10);
});
test("should return 10 for Ten of Spades", () => {
  const tenOfSpades = getCardValue("10♠");
  expect(tenOfSpades).toEqual(10);
});
// Case 4: Handle Ace (A):
test("should return 11 for Ace of Hearts", () => {
  const aceOfHearts = getCardValue("A♥");
  expect(aceOfHearts).toEqual(11);
});
// Case 5: Handle Invalid Cards:
const errorMessage =
  "Error: Invalid card rank. Input should be a string in the format 'R♠', where R is 2-10, J, Q, K, or A, followed by either ♠, ♥, ♦, or ♣.";

test("should throw an error for invalid card rank", () => {
  const invalidCard = getCardValue("1♠");
  expect(invalidCard).toEqual(errorMessage);
});
test("should throw an error for another invalid card rank", () => {
  const anotherInvalidCard = getCardValue("Z♠");
  expect(anotherInvalidCard).toEqual(errorMessage);
});
test("should throw an error for empty card string", () => {
  const emptyCard = getCardValue("");
  expect(emptyCard).toEqual(errorMessage);
});
test("should throw an error for boolean (true) input", () => {
  const booleanCard = getCardValue(true);
  expect(booleanCard).toEqual(errorMessage);
});
test("should throw an error for boolean (false) input", () => {
  const booleanCard = getCardValue(false);
  expect(booleanCard).toEqual(errorMessage);
});
test("should throw an error for numeric input", () => {
  const numericCard = getCardValue(10);
  expect(numericCard).toEqual(errorMessage);
});
test("should throw an error for null input", () => {
  const nullCard = getCardValue(null);
  expect(nullCard).toEqual(errorMessage);
});
test("should throw an error for undefined input", () => {
  const undefinedCard = getCardValue(undefined);
  expect(undefinedCard).toEqual(errorMessage);
});
test("should throw an error for object input", () => {
  const objectCard = getCardValue({ rank: "A", suit: "♠" });
  expect(objectCard).toEqual(errorMessage);
});
