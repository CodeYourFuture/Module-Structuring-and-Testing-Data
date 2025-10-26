// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return numeric value for number cards (2-10)", () => {
  const fiveofHearts = getCardValue("5♥");
  expect(fiveofHearts).toEqual(5);
});     
// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for face cards (J, Q, K)", () => {
  const jackOfDiamonds = getCardValue("J♦");
  const queenOfClubs = getCardValue("Q♣");
  const kingOfHearts = getCardValue("K♥");
  expect(jackOfDiamonds).toEqual(10);
  expect(queenOfClubs).toEqual(10);
  expect(kingOfHearts).toEqual(10);
});

// Case 4: Handle Ace (A):
test("should return 11 for Ace (A)", () => {
  const aceOfSpades = getCardValue("A♠");
  expect(aceOfSpades).toEqual(11);
});

// Case 5: Handle Invalid Cards:
test("should return undefined for invalid cards", () => {
  const invalidCard = getCardValue("1♠");
  expect(invalidCard).toEqual(undefined);
});

test("should return correct value for all number cards 2-10", () => {
  expect(getCardValue("2♥")).toEqual(2);
  expect(getCardValue("3♣")).toEqual(3);
  expect(getCardValue("4♦")).toEqual(4);
  expect(getCardValue("5♠")).toEqual(5);
  expect(getCardValue("6♥")).toEqual(6);
  expect(getCardValue("7♣")).toEqual(7);
  expect(getCardValue("8♦")).toEqual(8);
  expect(getCardValue("9♠")).toEqual(9);
  expect(getCardValue("10♥")).toEqual(10);
});

test("should handle numeric-literal edge cases", () => {
  expect(getCardValue("0x02♠")).toBeUndefined(); 
  expect(getCardValue("2.1♠")).toBeUndefined();      
  expect(getCardValue("0002♠")).toBeUndefined();     
});

test("should return 10 for all face cards", () => {
  expect(getCardValue("J♠")).toEqual(10);
  expect(getCardValue("Q♥")).toEqual(10);
  expect(getCardValue("K♣")).toEqual(10);
});

test("should return 11 for all Aces", () => {
  expect(getCardValue("A♠")).toEqual(11);
  expect(getCardValue("A♥")).toEqual(11);
  expect(getCardValue("A♦")).toEqual(11);
  expect(getCardValue("A♣")).toEqual(11);
});