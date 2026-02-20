/**
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

// Handling invalid cards
try {
  getCardValue("invalid");

  // This line will not be reached if an error is thrown as expected
  console.error("Error was not thrown for invalid card");
} catch (e) {}

// What other invalid card cases can you think of?
*
*/

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
  // Check if card is a string
  if (typeof card !== 'string') {
    throw new Error('Invalid card: card must be a string');
  }

  // Define valid ranks and suits
  const validRanks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  const validSuits = ['♠', '♥', '♦', '♣'];

  // Handle 10 separately as it's the only rank with 2 characters
  if (card.length < 2 || card.length > 3) {
    throw new Error('Invalid card: incorrect length');
  }

  let rank, suit;

  if (card.length === 3) {
    // Only "10" can be a 3-character card
    if (card.substring(0, 2) !== '10') {
      throw new Error('Invalid card: invalid rank');
    }
    rank = '10';
    suit = card[2];
  } else {
    // length === 2
    rank = card[0];
    suit = card[1];
  }

  // Validate rank
  if (!validRanks.includes(rank)) {
    throw new Error('Invalid card: invalid rank');
  }

  // Validate suit
  if (!validSuits.includes(suit)) {
    throw new Error('Invalid card: invalid suit');
  }

  // Return the value based on rank
  if (rank === 'A') {
    return 11;
  } else if (rank === 'J' || rank === 'Q' || rank === 'K') {
    return 10;
  } else {
    // For number cards "2" through "10"
    return parseInt(rank, 10);
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
// Examples:
assertEquals(getCardValue("9♠"), 9);

// Comprehensive test suite
console.log("Running tests for getCardValue function...\n");

// Test valid number cards (2-10)
console.log("Testing number cards:");
assertEquals(getCardValue("2♠"), 2);
assertEquals(getCardValue("3♥"), 3);
assertEquals(getCardValue("4♦"), 4);
assertEquals(getCardValue("5♣"), 5);
assertEquals(getCardValue("6♠"), 6);
assertEquals(getCardValue("7♥"), 7);
assertEquals(getCardValue("8♦"), 8);
assertEquals(getCardValue("9♣"), 9);
assertEquals(getCardValue("10♠"), 10);
console.log("✓ Number cards tests completed\n");

// Test face cards
console.log("Testing face cards:");
assertEquals(getCardValue("J♥"), 10);
assertEquals(getCardValue("Q♦"), 10);
assertEquals(getCardValue("K♣"), 10);
console.log("✓ Face cards tests completed\n");

// Test Ace
console.log("Testing Ace:");
assertEquals(getCardValue("A♠"), 11);
assertEquals(getCardValue("A♥"), 11);
assertEquals(getCardValue("A♦"), 11);
assertEquals(getCardValue("A♣"), 11);
console.log("✓ Ace tests completed\n");

// Test all suits with one rank
console.log("Testing all suits:");
assertEquals(getCardValue("5♠"), 5);
assertEquals(getCardValue("5♥"), 5);
assertEquals(getCardValue("5♦"), 5);
assertEquals(getCardValue("5♣"), 5);
console.log("✓ All suits tests completed\n");

// Test invalid cards
console.log("Testing invalid cards:");

// Test invalid format
try {
  getCardValue("invalid");
  console.error("✗ Error was not thrown for completely invalid card");
} catch (e) {
  console.log("✓ Correctly threw error for completely invalid card:", e.message);
}

// Test invalid rank
try {
  getCardValue("Z♠");
  console.error("✗ Error was not thrown for invalid rank");
} catch (e) {
  console.log("✓ Correctly threw error for invalid rank:", e.message);
}

// Test invalid suit
try {
  getCardValue("A⭐");
  console.error("✗ Error was not thrown for invalid suit");
} catch (e) {
  console.log("✓ Correctly threw error for invalid suit:", e.message);
}

// Test empty string
try {
  getCardValue("");
  console.error("✗ Error was not thrown for empty string");
} catch (e) {
  console.log("✓ Correctly threw error for empty string:", e.message);
}

// Test too short
try {
  getCardValue("A");
  console.error("✗ Error was not thrown for too short card");
} catch (e) {
  console.log("✓ Correctly threw error for too short card:", e.message);
}

// Test too long
try {
  getCardValue("10♥♠");
  console.error("✗ Error was not thrown for too long card");
} catch (e) {
  console.log("✓ Correctly threw error for too long card:", e.message);
}

// Test invalid 3-character card that's not "10"
try {
  getCardValue("11♠");
  console.error("✗ Error was not thrown for invalid 3-character card");
} catch (e) {
  console.log("✓ Correctly threw error for invalid 3-character card:", e.message);
}

// Test non-string input
try {
  getCardValue(123);
  console.error("✗ Error was not thrown for non-string input");
} catch (e) {
  console.log("✓ Correctly threw error for non-string input:", e.message);
}

// Test null input
try {
  getCardValue(null);
  console.error("✗ Error was not thrown for null input");
} catch (e) {
  console.log("✓ Correctly threw error for null input:", e.message);
}

// Test undefined input
try {
  getCardValue(undefined);
  console.error("✗ Error was not thrown for undefined input");
} catch (e) {
  console.log("✓ Correctly threw error for undefined input:", e.message);
}

console.log("\nAll tests completed!");

