// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck
//
// ORIGINAL QUESTION:
// Implement a function getCardValue, when given a string representing a playing card,
// should return the numerical value of the card.
//
// A valid card string will contain a rank followed by the suit.
// The rank can be one of the following strings:
//   "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"
// The suit can be one of the following emojis:
//   "♠", "♥", "♦", "♣"
// For example: "A♠", "2♥", "10♥", "J♣", "Q♦", "K♦".
//
// When the card is an ace ("A"), the function should return 11.
// When the card is a face card ("J", "Q", "K"), the function should return 10.
// When the card is a number card ("2" to "10"), the function should return its numeric value.
//
// When the card string is invalid (not following the above format), the function should
// throw an error.
//
// Acceptance criteria:
// After you have implemented the function, write tests to cover all the cases, and
// execute the code to ensure all tests pass.

function getCardValue(card) {
  // 1. Separate the rank from the suit emoji
  const rank = card.slice(0, -1);
  const suit = card.slice(-1);

  // 2. Validate the suit
  const validSuits = ["♠", "♥", "♦", "♣"];
  if (!validSuits.includes(suit)) {
    throw new Error("Invalid suit");
  }

  // 3. Calculate value based on the rank
  if (rank === "A") {
    return 11;
  }

  if (rank === "J" || rank === "Q" || rank === "K") {
    return 10;
  }

  // 4. Handle number cards (2-10)
  const numericRank = parseInt(rank, 10);

  // numericRank.toString() === rank makes sure rank was really a clean number string
  // Example: parseInt("9", 10) -> 9, "9" === "9" ✅
  // Example: parseInt("9x", 10) -> 9, "9" === "9x" ❌ (so invalid)
  if (numericRank >= 2 && numericRank <= 10 && numericRank.toString() === rank) {
    return numericRank;
  }

  // 5. If it reaches here, the rank was invalid
  throw new Error("Invalid rank");
}

// Export for other test files (Jest step later)
module.exports = getCardValue;

// Helper function for testing (console.assert style)
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// =======================
// TESTS
// =======================

// Test Aces and Face Cards
assertEquals(getCardValue("A♠"), 11);
assertEquals(getCardValue("J♥"), 10);
assertEquals(getCardValue("Q♦"), 10);
assertEquals(getCardValue("K♣"), 10);

// Test Numbers
assertEquals(getCardValue("9♠"), 9);
assertEquals(getCardValue("10♥"), 10);
assertEquals(getCardValue("2♣"), 2);

// Test Invalid Inputs (should throw errors)
try {
  getCardValue("invalid");
  console.error("Error was not thrown for 'invalid'");
} catch (e) {}

try {
  getCardValue("1♠"); // There is no 1 card, only A,2..10,J,Q,K
  console.error("Error was not thrown for '1♠'");
} catch (e) {}

try {
  getCardValue("A?"); // invalid suit
  console.error("Error was not thrown for 'A?'");
} catch (e) {}


