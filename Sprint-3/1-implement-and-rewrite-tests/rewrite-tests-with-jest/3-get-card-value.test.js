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
