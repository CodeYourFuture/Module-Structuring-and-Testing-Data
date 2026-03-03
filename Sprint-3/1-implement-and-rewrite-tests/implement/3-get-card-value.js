/**
 * Original file:
 *
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

// Implementation 

function getCardValue(card) {
  // Validate input type
  if (typeof card !== 'string' || card.length < 2) {
    throw new Error('Invalid card format');
  }

  // Define valid ranks and suits
  const validRanks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  const validSuits = ['♠', '♥', '♦', '♣'];

  // Extract rank and suit
  let rank, suit;

  // Handle '10' which is 2 characters
  if (card.startsWith('10') && card.length === 3) {
    rank = '10';
    suit = card[2];
  } else if (card.length === 2) {
    rank = card[0];
    suit = card[1];
  } else {
    throw new Error('Invalid card format');
  }

  // Validate rank and suit
  if (!validRanks.includes(rank) || !validSuits.includes(suit)) {
    throw new Error('Invalid card format');
  }

  // Return value based on rank
  if (rank === 'A') {
    return 11;
  } else if (['J', 'Q', 'K'].includes(rank)) {
    return 10;
  } else {
    return parseInt(rank, 10);
  }
}

module.exports = getCardValue;

function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// Helper function to test error throwing
function assertThrowsError(fn, expectedErrorMessage) {
  try {
    fn();
    console.error(`Error was not thrown. Expected: ${expectedErrorMessage}`);
  } catch (e) {
    console.assert(
      e.message === expectedErrorMessage,
      `Expected error message "${expectedErrorMessage}" but got "${e.message}"`
    );
  }
}

// Tests for valid cards
console.log('Testing valid cards:');
assertEquals(getCardValue('A♠'), 11);
assertEquals(getCardValue('A♥'), 11);
assertEquals(getCardValue('A♦'), 11);
assertEquals(getCardValue('A♣'), 11);

assertEquals(getCardValue('2♠'), 2);
assertEquals(getCardValue('3♥'), 3);
assertEquals(getCardValue('4♦'), 4);
assertEquals(getCardValue('5♣'), 5);
assertEquals(getCardValue('6♠'), 6);
assertEquals(getCardValue('7♥'), 7);
assertEquals(getCardValue('8♦'), 8);
assertEquals(getCardValue('9♣'), 9);
assertEquals(getCardValue('10♠'), 10);
assertEquals(getCardValue('10♥'), 10);
assertEquals(getCardValue('10♦'), 10);
assertEquals(getCardValue('10♣'), 10);

assertEquals(getCardValue('J♠'), 10);
assertEquals(getCardValue('Q♥'), 10);
assertEquals(getCardValue('K♦'), 10);
assertEquals(getCardValue('J♣'), 10);

// Tests for invalid cards
console.log('\nTesting invalid cards:');

// Invalid format
assertThrowsError(() => getCardValue(''), 'Invalid card format');
assertThrowsError(() => getCardValue('A'), 'Invalid card format');
assertThrowsError(() => getCardValue('10'), 'Invalid card format');
assertThrowsError(() => getCardValue('A♠♠'), 'Invalid card format');
assertThrowsError(() => getCardValue('10♠♠'), 'Invalid card format');

// Invalid rank
assertThrowsError(() => getCardValue('1♠'), 'Invalid card format');
assertThrowsError(() => getCardValue('11♠'), 'Invalid card format');
assertThrowsError(() => getCardValue('B♠'), 'Invalid card format');
assertThrowsError(() => getCardValue('X♠'), 'Invalid card format');

// Invalid suit
assertThrowsError(() => getCardValue('A♤'), 'Invalid card format'); // Using ♤ instead of ♠
assertThrowsError(() => getCardValue('A♡'), 'Invalid card format'); // Using ♡ instead of ♥
assertThrowsError(() => getCardValue('A♢'), 'Invalid card format'); // Using ♢ instead of ♦
assertThrowsError(() => getCardValue('A♧'), 'Invalid card format'); // Using ♧ instead of ♣

// Invalid type
assertThrowsError(() => getCardValue(123), 'Invalid card format');
assertThrowsError(() => getCardValue(null), 'Invalid card format');
assertThrowsError(() => getCardValue(undefined), 'Invalid card format');
assertThrowsError(() => getCardValue({}), 'Invalid card format');

console.log('\nAll tests completed!');

