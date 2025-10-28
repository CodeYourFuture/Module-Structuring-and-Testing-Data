// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// You will need to implement a function getCardValue
// the function takes a single parameter, a string representing a playing card
// the function should return the numerical value of the card
// the first test and first case is written for you
// complete the rest of the tests and cases
// write one test at a time, and make it pass, build your solution up methodically
// just make one change at a time -- don't rush -- programmers are deep and careful thinkers

function getCardValue(card) {
  // Extract rank by removing the last character (the suit)
  const rank = card.slice(0, -1);

  // Handle Ace
  if (rank === "A") {
    return 11;
  }

  // Handle face cards
  if (["J", "Q", "K"].includes(rank) || rank === "10") {
    return 10;
  }

  // Handle number cards 2-9
  const num = Number(rank);
  if (num >= 2 && num <= 9) {
    return num;
  }

  // Invalid card
  throw new Error("Invalid card rank.");
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

// Acceptance criteria:

// Case 1: Ace card
// Given a card string in the format "A♠" (representing a card in blackjack - the last character will always be an emoji for a suit, and all characters before will be a number 2-10, or one letter of J, Q, K, A),
// When the function getCardValue is called with this card string as input,
// Then it should return the numerical card value
const aceofSpades = getCardValue("A♠");
assertEquals(aceofSpades, 11);

// Case 2: Number Cards (2-10)
// Given a card with a rank between "2" and "9",
// When the function is called with such a card,
// Then it should return the numeric value corresponding to the rank
const fiveofHearts = getCardValue("5♥");
assertEquals(fiveofHearts, 5);

const tenofDiamonds = getCardValue("10♦");
assertEquals(tenofDiamonds, 10);

// Case 3: Face Cards (J, Q, K)
// Given a card with a rank of "J," "Q," or "K",
// When the function is called with such a card,
// Then it should return 10
//
const jackofClubs = getCardValue("J♣");
assertEquals(jackofClubs, 10);

const queenofHearts = getCardValue("Q♥");
assertEquals(queenofHearts, 10);

const kingofSpades = getCardValue("K♠");
assertEquals(kingofSpades, 10);

// Case 4: Invalid Cards
// Given a card with an invalid rank (neither a number nor a recognized face card),
// When the function is called with such a card,
// Then it should throw an error
try {
  getCardValue("X♠");
  console.error("Expected error for invalid card rank");
} catch (error) {
  assertEquals(error.message, "Invalid card rank.");
}

console.log("All tests completed");
