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
  if (typeof card !== 'string') {
    throw new Error('Invalid card: must be a string');
  }

  const suits = ['♠', '♥', '♦', '♣'];
  const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  let rank, suit;
  if (card.length === 2) {
    rank = card[0];
    suit = card[1];
  } else if (card.length === 3 && card.startsWith('10')) {
    rank = '10';
    suit = card[2];
  } else {
    throw new Error('Invalid card format');
  }

  if (!suits.includes(suit)) {
    throw new Error('Invalid suit');
  }

  if (!ranks.includes(rank)) {
    throw new Error('Invalid rank');
  }

  if (rank === 'A') {
    return 11;
  } else if (['J', 'Q', 'K'].includes(rank)) {
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
// Examples:
assertEquals(getCardValue("9♠"), 9);

// Test all ranks
assertEquals(getCardValue("A♠"), 11);
assertEquals(getCardValue("2♥"), 2);
assertEquals(getCardValue("3♦"), 3);
assertEquals(getCardValue("4♣"), 4);
assertEquals(getCardValue("5♠"), 5);
assertEquals(getCardValue("6♥"), 6);
assertEquals(getCardValue("7♦"), 7);
assertEquals(getCardValue("8♣"), 8);
assertEquals(getCardValue("9♠"), 9);
assertEquals(getCardValue("10♥"), 10);
assertEquals(getCardValue("J♦"), 10);
assertEquals(getCardValue("Q♣"), 10);
assertEquals(getCardValue("K♠"), 10);

// Test different suits
assertEquals(getCardValue("A♥"), 11);
assertEquals(getCardValue("K♦"), 10);

// Handling invalid cards
try {
  getCardValue("invalid");
  console.error("Error was not thrown for invalid card");
} catch (e) { }

// Test invalid rank
try {
  getCardValue("1♠");
  console.error("Error was not thrown for invalid rank");
} catch (e) { }

// Test invalid suit
try {
  getCardValue("A♤");
  console.error("Error was not thrown for invalid suit");
} catch (e) { }

// Test wrong length
try {
  getCardValue("A");
  console.error("Error was not thrown for wrong length");
} catch (e) { }

// Test non-string
try {
  getCardValue(123);
  console.error("Error was not thrown for non-string");
} catch (e) { }

// What other invalid card cases can you think of?
