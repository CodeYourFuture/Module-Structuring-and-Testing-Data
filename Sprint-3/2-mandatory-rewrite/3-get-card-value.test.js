const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

const aceofSpades = getCardValue("A♠");
assertEquals(aceofSpades, 11);

const fiveofHearts = getCardValue("5♥");
assertEquals(fiveofHearts, 5);

const tenofDiamonds = getCardValue("10♦");
assertEquals(tenofDiamonds, 10);

const jackofClubs = getCardValue("J♣");
assertEquals(jackofClubs, 10);

const queenofHearts = getCardValue("Q♥");
assertEquals(queenofHearts, 10);

const kingofSpades = getCardValue("K♠");
assertEquals(kingofSpades, 10);

try {
  getCardValue("Z♠");
} catch (error) {
  console.log("Caught error:", error.message);
}

// Case 2: Handle Number Cards (2-10):
// Case 3: Handle Face Cards (J, Q, K):
// Case 4: Handle Ace (A):
// Case 5: Handle Invalid Cards:
