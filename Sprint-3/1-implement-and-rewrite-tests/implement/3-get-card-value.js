// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// Implement a function getCardValue, when given a string representing a playing card,
// should return the numerical value of the card.

// A valid card string will contain a rank followed by the suit.
// The rank can be one of the following strings:
//   "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"
// The suit can be one of the following emojis:
//   "♠", "♥", "♦", "♣"
// For example: "A♠", "2♥", "10♥", "J♣", "Q♦", "K♦".

// When the card is an ace ("A"), the function should return 11.
// When the card is a face card ("J", "Q", "K"), the function should return 10.
// When the card is a number card ("2" to "10"), the function should return its numeric value.

// When the card string is invalid (not following the above format), the function should
// throw an error.

// Acceptance criteria:
// After you have implemented the function, write tests to cover all the cases, and
// execute the code to ensure all tests pass.

function getCardValue(card) {
  // TODO: Implement this function
  // Checks that input is a string and has correct length,
  // 2 chars for 2-9/A/J/Q/K, 3 chars for 10
  if (typeof card !== 'string' || (card.length !== 2 && card.length !==3)) {
    throw new Error('Invalid card format');
  }
  // Get the suit, always the last character
  const suit = card.slice(-1);
  // Get the rank, everything except the last character
  const rank = card.slice(0, -1);
  // Checks if suit is one of the four allowed symbols
  if (!'♠♥♦♣'.includes(suit)) {
    throw new Error('Invalid suit');
  }
  // Special case: Ace is worth 11
  if (rank === 'A') return 11;
  // Special case: Face cards (Jack, Queen, King) are worth 10
  if (rank === 'J' || rank === 'Q' || rank === 'K') return 10;
  // For number cards (2-10): converts rank string into number
  const value = Number(rank);
  // Makes sure it's actually a valid number between 2 and 10
  if (isNaN(value) || value < 2 || value > 10) {
    throw new Error('Invalid rank');
  }
  // Return the numeric value for 2-10
  return value;
}

// The line below allows us to load the getCardValue function into tests in other files.
// This will be useful in the "rewrite tests with jest" step.
module.exports = getCardValue;

// Helper functions to make our assertions easier to read.
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// TODO: Write tests to cover all outcomes, including throwing errors for invalid cards.
// Examples:
assertEquals(getCardValue("9♠"), 9);

// Valid number cards (2-10)
const twoofHearts = getCardValue("2♥");
assertEquals(twoofHearts, 2);

// Added: test for 2♠, returns 2
const twoofSpades = getCardValue("2♠");
assertEquals(twoofSpades, 2);

const fiveofDiamonds = getCardValue("5♦");
assertEquals(fiveofDiamonds, 5);

// Ace returns 11
const aceofSpades = getCardValue("A♠");
assertEquals(aceofSpades, 11);

// Face cards return 10 (J, Q, K)
const jackofHearts = getCardValue("J♥");
assertEquals(jackofHearts, 10);

const queenofDiamonds = getCardValue("Q♦");
assertEquals(queenofDiamonds, 10);

const kingofClubs = getCardValue("K♣");
assertEquals(kingofClubs, 10);

// Handling invalid cards
// Invalid format, random string
try {
  getCardValue("invalid");

  // This line will not be reached if an error is thrown as expected
  console.error("Error was not thrown for invalid card");
} catch (e) {}

// What other invalid card cases can you think of?
// Too short, missing suit
try {
  getCardValue("A");
  console.error("Error was not thrown for too short card");
} catch (e) {}

// Invalid rank
try {
  getCardValue("X♠");
  console.error("Error was not thrown for invalid rank");
} catch (e) {}

// Invalid suit, wrong symbol
try {
  getCardValue("Kx");
  console.error("Error was not thrown for missing suit");
} catch (e) {}

// Missing suit
try {
  getCardValue("10");
  console.error("Error was not thrown for missing suit");
} catch (e) {}

// Empty string
try {
  getCardValue("");
  console.error("Error was not thrown for empty string");
} catch (e) {}

// Invalid extra characters in rank
try {
  getCardValue("2.♠");
  console.error("Should have thrown for '2.♠'");
} catch (e) {}

try {
  getCardValue("+2♠");
  console.error("Should have thrown for '+2♠'");
} catch (e) {}