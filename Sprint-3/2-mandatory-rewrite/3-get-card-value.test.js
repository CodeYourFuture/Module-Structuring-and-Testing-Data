const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

test("should return 5 for 5 of Hearts", () => {
  const fiveofHearts = getCardValue("5♥");
  expect(fiveofHearts).toEqual(5);
});

test("should return 10 for 10 of Diamonds", () => {
  const tenofDiamonds = getCardValue("10♦");
  expect(tenofDiamonds).toEqual(10);
});

test("should return 10 for Jack of Clubs", () => {
  const jackofClubs = getCardValue("J♣");
  expect(jackofClubs).toEqual(10);
});

test("should return 10 for Queen of Hearts", () => {
  const queenofHearts = getCardValue("Q♥");
  expect(queenofHearts).toEqual(10);
});

test("should return 10 for King of Spades", () => {
  const kingofSpades = getCardValue("K♠");
  expect(kingofSpades).toEqual(10);
});

try {
  getCardValue("Z♠");
} catch (error) {
  console.log("Caught error:", error.message);
}

// Case 2: Handle Number Cards (2-10):
// Case 3: Handle Face Cards (J, Q, K):
// Case 4: Handle Ace (A):
// Case 5: Handle Invalid Cards:
