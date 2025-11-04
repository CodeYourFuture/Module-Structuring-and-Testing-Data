// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceOfSpades = getCardValue("A♠");
  expect(aceOfSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return 5 for Five of Hearts", () => {
  const fiveOfHearts = getCardValue("5♥");
  expect(fiveOfHearts).toEqual(5);
});

test("should return 10 for Ten of Clubs", () => {
  const tenOfClubs = getCardValue("10♣");
  expect(tenOfClubs).toEqual(10);
});
// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for Jack of Diamonds", () => {
  const jackOfDiamonds = getCardValue("J♦");
  expect(jackOfDiamonds).toEqual(10);
});

test("should return 10 for Queen of Hearts", () => {
  const queenOfHearts = getCardValue("Q♥");
  expect(queenOfHearts).toEqual(10);
});

test("should return 10 for King of Spades", () => {
  const kingOfSpades = getCardValue("K♠");
  expect(kingOfSpades).toEqual(10);
});
// Case 4: Handle Ace (A):
test("should return 11 for Ace of Clubs", () => {
  const aceOfClubs = getCardValue("A♣");
  expect(aceOfClubs).toEqual(11);
});
// Case 5: Handle Invalid Cards:
test("should throw an error for invalid card rank", () => {
  expect(() => getCardValue("Z♠")).toThrow("Invalid card rank");
});
