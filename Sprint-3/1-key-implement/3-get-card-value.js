// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// You will need to implement a function getCardValue
// the function takes a single parameter, a string representing a playing card
// the function should return the numerical value of the card
// the first test and first case is written for you
// complete the rest of the tests and cases
// write one test at a time, and make it pass, build your solution up methodically
// just make one change at a time -- don't rush -- programmers are deep and careful thinkers
function getCardValue(card) {
  // Extract the rank from the card string
  const rank = card.slice(0, -1);
  // If the rank is "A", return 11
    if (rank === "A") return 11;

  // If the rank is a number between "2" and "10", return its numeric value
    if (["2", "3", "4", "5", "6", "7", "8", "9", "10"].includes(rank)) {
        return parseInt(rank, 10); // Convert string to number
    }

  // If the rank is "J", "Q", or "K", return 10
    if (["J", "Q", "K"].includes(rank)) return 10;

  // If the rank is invalid, throw an error
    throw new Error("Invalid card rank");
  
}

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

// Given a card string in the format "A♠" (representing a card in blackjack - the last character will always be an emoji for a suit, and all characters before will be a number 2-10, or one letter of J, Q, K, A),
// When the function getCardValue is called with this card string as input,
// Then it should return the numerical card value
const aceofSpades = getCardValue("A♠");
assertEquals(aceofSpades, 11);

// Handle Number Cards (2-10):
// Given a card with a rank between "2" and "9",
// When the function is called with such a card,
// Then it should return the numeric value corresponding to the rank (e.g., "5" should return 5).
const fiveofHearts = getCardValue("5♥");
assertEquals(fiveofHearts, 5);

const twoOfClubs = getCardValue("2♣");
assertEquals(twoOfClubs, 2);

const nineOfDiamonds = getCardValue("9♦");
assertEquals(nineOfDiamonds, 9);

// ====> write your test here, and then add a line to pass the test in the function above

// Handle Face Cards (J, Q, K):
// Given a card with a rank of "10," "J," "Q," or "K",
// When the function is called with such a card,
// Then it should return the value 10, as these cards are worth 10 points each in blackjack.
const tenOfSpades = getCardValue("10♠");
assertEquals(tenOfSpades, 10);

const jackOfDiamonds = getCardValue("J♦");
assertEquals(jackOfDiamonds, 10);

const queenOfSpades = getCardValue("Q♠");
assertEquals(queenOfSpades, 10);

const kingOfClubs = getCardValue("K♣");
assertEquals(kingOfClubs, 10);

// Handle Ace (A):
// Given a card with a rank of "A",
// When the function is called with an Ace,
// Then it should, by default, assume the Ace is worth 11 points, which is a common rule in blackjack.
const aceOfClubs = getCardValue("A♣");
assertEquals(aceOfClubs, 11);

// Handle Invalid Cards:
// Given a card with an invalid rank (neither a number nor a recognized face card),
// When the function is called with such a card,
// Then it should throw an error indicating "Invalid card rank."
try {
  getCardValue("X♠"); // Invalid card
} catch (error) {
  assertEquals(error.message, "Invalid card rank");
}
