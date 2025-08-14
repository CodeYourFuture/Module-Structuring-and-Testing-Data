// Implement the function getCardValue
// The function takes a single parameter, a string representing a playing card
// The function should return the numerical value of the card

function getCardValue(card) {
  const rank = card.slice(0, -1); // Extract the rank part of the card (removing the suit emoji)

  if (rank === "A") return 11; // Ace is worth 11 points
  if (["K", "Q", "J", "10"].includes(rank)) return 10; // Face cards (K, Q, J, 10) are worth 10 points
  if (!isNaN(rank) && rank >= 2 && rank <= 9) return Number(rank); // Number cards 2-9 return their numeric value

  throw new Error("Invalid card rank"); // If the rank is invalid, throw an error
}

// Helper function for assertions
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// Acceptance criteria:

// Given a card string in the format "A♠" (representing a card in blackjack),
// When the function getCardValue is called with this card string as input,
// Then it should return the numerical card value

// Test 1: Handle Ace (A)
const aceofSpades = getCardValue("A♠");
assertEquals(aceofSpades, 11);

// Test 2: Handle Number Cards (2-9)
// Given a card with a rank between "2" and "9", the function should return the numeric value
const fiveofHearts = getCardValue("5♥");
assertEquals(fiveofHearts, 5);

// Test 3: Handle Face Cards (J, Q, K, 10)
// Face cards (J, Q, K, 10) should all return 10 points
const kingofClubs = getCardValue("K♣");
assertEquals(kingofClubs, 10);

const queenofSpades = getCardValue("Q♠");
assertEquals(queenofSpades, 10);

const jackofHearts = getCardValue("J♥");
assertEquals(jackofHearts, 10);

const tenofDiamonds = getCardValue("10♦");
assertEquals(tenofDiamonds, 10);

// Test 4: Handle Invalid Cards
// When the card has an invalid rank, an error should be thrown
try {
  getCardValue("X♠"); // Invalid card rank "X"
} catch (error) {
  assertEquals(error.message, "Invalid card rank");
}

try {
  getCardValue("1♠"); // Invalid card rank "1"
} catch (error) {
  assertEquals(error.message, "Invalid card rank");
}
