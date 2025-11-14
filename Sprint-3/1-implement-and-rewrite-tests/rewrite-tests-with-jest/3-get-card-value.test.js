// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceOfSpades = getCardValue("A♠");
  expect(aceOfSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return 2 for 2 of hearts", () => {
  const twoOfHearts = getCardValue("2♥");
  expect(twoOfHearts).toEqual(2)
})

test("should return 10 for 10 of Diamonds", () => {
  const tenOfDiamonds = getCardValue("10♦");
  expect(tenOfDiamonds).toEqual(10)
});

// Case 3: Handle Face Cards (J, Q, K):

test("should return 10 for Jack of Clubs", () => {
  const jackOfClubs = getCardValue("J♣");
  expect(jackOfClubs).toEqual(10)
});

test("should return 10 for Queen of Hearts", () => {
  const queenOfHearts = getCardValue("Q♥");
  expect(queenOfHearts).toEqual(10)
});

test("should return 10 for King of Spades", () => {
  const kingOfSpades= getCardValue("K♠");
  expect(kingOfSpades).toEqual(10)
});

// Case 4: Handle Ace (A):
test("should return 11 for Ace of Spades", () => {
  const aceOfHearts = getCardValue("A♥");
  expect(aceOfHearts).toEqual(11);
});

// Case 5: Handle Invalid Cards:

test("should throw an error for invalid card", () => {
  expect(() => getCardValue("1♣")).toThrow("invalid card rank.");
});
