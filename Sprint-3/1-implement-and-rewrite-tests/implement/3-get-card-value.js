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
  if (typeof card !== "string") {
    throw new Error("Invalid card: must be a string");
  }
  if (typeof card !== "string") {
    throw new Error("Invalid card: must be a string");
  }

  // Valid suits
  const suits = ["♠", "♥", "♦", "♣"];

  // Extract suit (last character)
  const suit = card.slice(-1);
  if (!suits.includes(suit)) {
    throw new Error("Invalid card: unknown suit");
  }

  // Extract rank (everything except last character)
  const rank = card.slice(0, -1);

  const rankValues = {
    A: 11,
    J: 10,
    Q: 10,
    K: 10
  };

  if (rankValues[rank]) {
    return rankValues[rank];
  }

  // Check numeric ranks 2–10
  const validNumericRanks = ["2", "3", "4", "5", "6", "7", "8", "9", "10"];
  if (validNumericRanks.includes(rank)) {
    return Number(rank);
  } cd

  throw new Error("Invalid card: unknown rank");
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

assertEquals(getCardValue("9♠"), 9);
assertEquals(getCardValue("A♥"), 11);
assertEquals(getCardValue("10♦"), 10);
assertEquals(getCardValue("K♣"), 10);
// Handling invalid cards
try {
  getCardValue("invalid");

  // This line will not be reached if an error is thrown as expected
  console.error("Error was not thrown for invalid card");
} catch (e) { }

// What other invalid card cases can you think of?

try {
  getCardValue("A?");
  console.error("Error was not thrown for invalid suit");
} catch (e) { }

// Invalid rank: too small
try {
  getCardValue("1♠");
  console.error("Error was not thrown for invalid rank 1");
} catch (e) { }

// Invalid rank: too large
try {
  getCardValue("11♣");
  console.error("Error was not thrown for invalid rank 11");
} catch (e) { }

// Missing suit
try {
  getCardValue("A");
  console.error("Error was not thrown for missing suit");
} catch (e) { }

// Missing rank
try {
  getCardValue("♠");
  console.error("Error was not thrown for missing rank");
} catch (e) { }

// Empty string
try {
  getCardValue("");
  console.error("Error was not thrown for empty string");
} catch (e) { }

// Non-string input
try {
  getCardValue(42);
  console.error("Error was not thrown for non-string input");
} catch (e) { }

// Rank with extra characters
try {
  getCardValue("AAA♠");
  console.error("Error was not thrown for malformed rank");
} catch (e) { }

// Suit in the wrong position
try {
  getCardValue("♠A");
  console.error("Error was not thrown for reversed card format");
} catch (e) { }