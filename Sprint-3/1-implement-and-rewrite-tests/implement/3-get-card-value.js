// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// You will need to implement a function getCardValue
// the function takes a single parameter, a string representing a playing card
// the function should return the numerical value of the card
// the first test and first case is written for you
// complete the rest of the tests and cases
// write one test at a time, and make it pass, build your solution up methodically
// just make one change at a time -- don't rush -- programmers are deep and careful thinkers
function getCardValue(card) {
  let rank = card.substring(0, card.length - 1); // Remove the suit emoji
  let actualOutput;

  if (rank === "A") {
    actualOutput = 11;
  } else if (rank === "J" || rank === "Q" || rank === "K" || rank === "10") {
    actualOutput = 10;
  } else if (
    rank === "2" ||
    rank === "3" ||
    rank === "4" ||
    rank === "5" ||
    rank === "6" ||
    rank === "7" ||
    rank === "8" ||
    rank === "9"
  ) {
    actualOutput = Number(rank);
  } else {
    actualOutput = "Invalid card rank.";
  }

  return actualOutput;
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

// Given a card string in the format "A♠" (representing a card in blackjack - the last character will always be an emoji for a suit,
// and all characters before will be a number 2-10, or one letter of J, Q, K, A),
// When the function getCardValue is called with this card string as input,
// Then it should return the numerical card value
const aceOfSpades = getCardValue("A♠");
assertEquals(aceOfSpades, 11);

// Handle Number Cards (2-10):
// Given a card with a rank between "2" and "9",
// When the function is called with such a card,
// Then it should return the numeric value corresponding to the rank (e.g., "5" should return 5).
const fiveOfHearts = getCardValue("5♥");
// ====> write your test here, and then add a line to pass the test in the function above
assertEquals(fiveOfHearts, 5);

// Handle Face Cards (J, Q, K):
// Given a card with a rank of "10," "J," "Q," or "K",
// When the function is called with such a card,
// Then it should return the value 10, as these cards are worth 10 points each in blackjack.
const jackOfDiamonds = getCardValue("J♦");
assertEquals(jackOfDiamonds, 10);

const queenOfClubs = getCardValue("Q♣");
assertEquals(queenOfClubs, 10);

const kingOfHearts = getCardValue("K♥");
assertEquals(kingOfHearts, 10);

const tenOfSpades = getCardValue("10♠");
assertEquals(tenOfSpades, 10);

// Handle Invalid Cards:
// Given a card with an invalid rank (neither a number nor a recognized face card),
// When the function is called with such a card,
// Then it should throw an error indicating "Invalid card rank."
const invalidRandomCard = getCardValue("15♠");
assertEquals(invalidRandomCard, "Invalid card rank.");

const oneOfSpades = getCardValue("1♠");
assertEquals(oneOfSpades, "Invalid card rank.");

const emptyCard = getCardValue("");
assertEquals(emptyCard, "Invalid card rank.");

