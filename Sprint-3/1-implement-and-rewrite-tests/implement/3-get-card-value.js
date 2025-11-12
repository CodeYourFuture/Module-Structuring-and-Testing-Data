function getCardValue(card) {
  const rank = card.slice(0, -1);
  if (rank === "A") {
    return 11;
  }
  if (/^(?:[2-9]|10)$/.test(rank)) {
    return Number(rank);
  } // Matches strings of only whole numbers 2-10
  // Handle 10 separately to avoid matching '1' alone
  if (["J", "Q", "K"].includes(rank)) {
    return 10;
  } else {
    throw new Error("Invalid card rank");
  }
}

// The line below allows us to load the getCardValue function into tests in other files.
// This will be useful in the "rewrite tests with jest" step.
module.exports = getCardValue;

// You need to write assertions for your function to check it works in different cases
// we're going to use this helper function to make our assertions easier to read
// if the actual output matches the target output, the test will pass
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// Case 1
// Given a card string in the format "A♠" (representing a card in blackjack - the last character will always be an emoji for a suit, and all characters before will be a number 2-10, or one letter of J, Q, K, A),
// When the function getCardValue is called with this card string as input,
// Then it should return the numerical card value
const aceofSpades = getCardValue("A♠");
assertEquals(aceofSpades, 11);

// Case 2
// Handle Number Cards (2-10):
// Given a card with a rank between "2" and "9",
// When the function is called with such a card,
// Then it should return the numeric value corresponding to the rank (e.g., "5" should return 5).
const fiveofHearts = getCardValue("5♥");
assertEquals(fiveofHearts, 5);

// Case 3
// Handle Face Cards (J, Q, K):
// Given a card with a rank of "10," "J," "Q," or "K",
// When the function is called with such a card,
// Then it should return the value 10, as these cards are worth 10 points each in blackjack.
const kingofDiamonds = getCardValue("K♦");
assertEquals(kingofDiamonds, 10);

// Case 4
// Handle Invalid Cards:
// Given a card with an invalid rank (neither a number nor a recognized face card),
// When the function is called with such a card,
// Then it should throw an error indicating "Invalid card rank."
try {
  getCardValue("1♣");
  console.assert(false, "Expected error for invalid card");
} catch (error) {
  console.assert(
    error.message === "Invalid card rank",
    `Expected "Invalid card rank" error, but got: ${error.message}`
  );
}
