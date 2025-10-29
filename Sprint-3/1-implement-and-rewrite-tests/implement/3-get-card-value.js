// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// You will need to implement a function getCardValue
// the function takes a single parameter, a string representing a playing card
// the function should return the numerical value of the card
// the first test and first case is written for you
// complete the rest of the tests and cases
// write one test at a time, and make it pass, build your solution up methodically
// just make one change at a time -- don't rush -- programmers are deep and careful thinkers
function getCardValue(card) {
  const rank = card.slice(0, -1);
  if (rank === "A") return 11;
  if (rank === "J" || rank === "Q" || rank === "K" || rank === "10") return 10;
  const numValue = parseInt(rank);
  if (numValue >= 2 && numValue <= 9) return numValue;
  throw new Error("Invalid card rank");
}

module.exports = getCardValue;

function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// Ace → 11
assertEquals(getCardValue("A♠"), 11);

// Number Cards → numeric value
assertEquals(getCardValue("5♥"), 5);
assertEquals(getCardValue("2♦"), 2);
assertEquals(getCardValue("9♣"), 9);

// Face Cards (J, Q, K, 10) → 10
assertEquals(getCardValue("K♥"), 10);
assertEquals(getCardValue("Q♠"), 10);
assertEquals(getCardValue("J♦"), 10);
assertEquals(getCardValue("10♣"), 10);

// Ace (all suits) → 11
assertEquals(getCardValue("A♥"), 11);

// Invalid Card → throw error
try {
  getCardValue("X♠");
  console.assert(false, "Should have thrown an error for invalid card");
} catch (error) {
  assertEquals(error.message, "Invalid card rank");
}

console.log("✅ All tests passed!");
