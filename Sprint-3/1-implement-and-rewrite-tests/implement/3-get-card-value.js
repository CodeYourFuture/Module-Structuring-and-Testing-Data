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
  // Define valid ranks and suits
  const validRanks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  const validSuits = ["♠", "♥", "♦", "♣"];
  
  // Check if card is a valid string
  if (typeof card !== 'string' || card.length === 0) {
    throw new Error('Invalid card');
  }
  
  // Extract suit (last character)
  const suit = card[card.length - 1];
  
  // Extract rank (everything except last character)
  const rank = card.slice(0, -1);
  
  // Validate suit
  if (!validSuits.includes(suit)) {
    throw new Error('Invalid card');
  }
  
  // Validate rank
  if (!validRanks.includes(rank)) {
    throw new Error('Invalid card');
  }
  
  // Return value based on rank
  if (rank === "A") {
    return 11;
  } else if (rank === "J" || rank === "Q" || rank === "K") {
    return 10;
  } else {
    return parseInt(rank);
  }
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

// Test all Ace cards (should return 11)
assertEquals(getCardValue("A♠"), 11);
assertEquals(getCardValue("A♥"), 11);
assertEquals(getCardValue("A♦"), 11);
assertEquals(getCardValue("A♣"), 11);

// Test all face cards (should return 10)
assertEquals(getCardValue("J♠"), 10);
assertEquals(getCardValue("J♥"), 10);
assertEquals(getCardValue("J♦"), 10);
assertEquals(getCardValue("J♣"), 10);
assertEquals(getCardValue("Q♠"), 10);
assertEquals(getCardValue("Q♥"), 10);
assertEquals(getCardValue("Q♦"), 10);
assertEquals(getCardValue("Q♣"), 10);
assertEquals(getCardValue("K♠"), 10);
assertEquals(getCardValue("K♥"), 10);
assertEquals(getCardValue("K♦"), 10);
assertEquals(getCardValue("K♣"), 10);

// Test number cards (should return their numeric value)
assertEquals(getCardValue("2♠"), 2);
assertEquals(getCardValue("3♣"), 3);
assertEquals(getCardValue("4♥"), 4);
assertEquals(getCardValue("5♦"), 5);
assertEquals(getCardValue("6♠"), 6);
assertEquals(getCardValue("7♣"), 7);
assertEquals(getCardValue("8♥"), 8);
assertEquals(getCardValue("9♠"), 9);
assertEquals(getCardValue("10♥"), 10);

// Handling invalid cards - generic invalid string
try {
  getCardValue("invalid");
  console.error("Error was not thrown for invalid card");
} catch (e) {}

// Card without suit
try {
  getCardValue("A");
  console.error("Error was not thrown for card without suit");
} catch (e) {}

// Card without rank (just a suit)
try {
  getCardValue("♠");
  console.error("Error was not thrown for card without rank");
} catch (e) {}

// Invalid rank
try {
  getCardValue("11♠");
  console.error("Error was not thrown for invalid rank '11'");
} catch (e) {}

try {
  getCardValue("X♠");
  console.error("Error was not thrown for invalid rank 'X'");
} catch (e) {}

// Invalid suit
try {
  getCardValue("A♪");
  console.error("Error was not thrown for invalid suit");
} catch (e) {}

try {
  getCardValue("AH");
  console.error("Error was not thrown for invalid suit 'H'");
} catch (e) {}

// Empty string
try {
  getCardValue("");
  console.error("Error was not thrown for empty string");
} catch (e) {}

// Extra characters
try {
  getCardValue("A♠X");
  console.error("Error was not thrown for extra characters");
} catch (e) {}

console.log("All tests completed!");
