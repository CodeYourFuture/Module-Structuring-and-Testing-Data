// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return 7 for 7 of Hearts", () => {
  const sevenOfHearts = getCardValue("7♥");
  expect(sevenOfHearts).toEqual(7);
});
// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for Jack of Diamonds", () => {
  const jackOfDiamonds = getCardValue("J♦");
  expect(jackOfDiamonds).toEqual(10);
});

test("should return 10 for Queen of Clubs", () => {
  const queenOfClubs = getCardValue("Q♣");
  expect(queenOfClubs).toEqual(10);
});

test("should return 10 for King of Spades", () => {
  const kingOfSpades = getCardValue("K♠");
  expect(kingOfSpades).toEqual(10);
});

// Case 4: Handle Ace (A):
test("should return 11 for Ace of Diamonds", () => {
  const aceOfDiamonds = getCardValue("A♦");
  expect(aceOfDiamonds).toEqual(11);
});
// Case 5: Handle Invalid Cards:
test("should return null for invalid card '1X'", () => {
  const invalidCard1 = getCardValue("1X");
  expect(invalidCard1).toBe("Invalid card rank");
});
test("should return null for invalid card '11H'", () => {
  const invalidCard2 = getCardValue("11H");
  expect(invalidCard2).toBe("Invalid card rank");
});

