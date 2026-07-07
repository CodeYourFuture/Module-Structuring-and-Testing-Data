// Implement a function getCardValue, when given a string representing a playing card,
// should return the numerical value of the card.

function getCardValue(card) {
  // Validate that input is a non-empty string and has at least 2 characters (Rank + Suit)
  if (typeof card !== "string" || card.length < 2) {
    throw new Error("Invalid card format");
  }

  // Define valid suits
  const validSuits = ["♠", "♥", "♦", "♣"];

  // The suit is always the last character/emoji of the string.
  // Using Array.from() or string methods safely extracts it.
  const suit = card.slice(-1);
  if (!validSuits.includes(suit)) {
    throw new Error("Invalid card suit");
  }

  // The rank is everything up to the suit emoji.
  const rank = card.slice(0, -1);

  // Handle value mappings
  if (rank === "A") {
    return 11;
  }
  
  if (["J", "Q", "K"].includes(rank)) {
    return 10;
  }

  // Parse numeric ranks ("2" through "10")
  const numericValue = parseInt(rank, 10);
  if (!isNaN(numericValue) && numericValue >= 2 && numericValue <= 10 && String(numericValue) === rank) {
    return numericValue;
  }

  // If the rank doesn't match any criteria, it's invalid.
  throw new Error("Invalid card rank");
}

module.exports = getCardValue;

// ==========================================
// ASSERTION HELPERS
// ==========================================

function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// A helper to verify that an invalid input throws an error as expected
function assertThrows(invalidCard) {
  try {
    getCardValue(invalidCard);
    console.error(`❌ Error was NOT thrown for invalid card: "${invalidCard}"`);
  } catch (e) {
    // Test passes if an error is thrown
  }
}

// ==========================================
// TEST SUITE
// ==========================================

console.log("Running tests...");

// 1. Valid Aces (Value: 11)
assertEquals(getCardValue("A♠"), 11);
assertEquals(getCardValue("A♥"), 11);

// 2. Valid Face Cards (Value: 10)
assertEquals(getCardValue("J♣"), 10);
assertEquals(getCardValue("Q♦"), 10);
assertEquals(getCardValue("K♠"), 10);

// 3. Valid Numeric Boundary Cards
assertEquals(getCardValue("2♥"), 2);
assertEquals(getCardValue("5♦"), 5);
assertEquals(getCardValue("9♠"), 9);
assertEquals(getCardValue("10♣"), 10);

// 4. Invalid Card Scenarios (Should throw errors)
assertThrows("invalid");   // Completely wrong format
assertThrows("A");         // Missing suit
assertThrows("♠");         // Missing rank
assertThrows("1♠");        // 1 is not a valid rank (should be "A")
assertThrows("11♥");       // Out-of-bounds number card
assertThrows("A♣️");       // Suit variations or hidden characters
assertThrows("Q⭐️");       // Invalid suit emoji
assertThrows("J ♠");       // Unwanted spacing

console.log("All tests completed!");