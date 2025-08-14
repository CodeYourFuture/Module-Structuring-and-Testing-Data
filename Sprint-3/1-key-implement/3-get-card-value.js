// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// You will need to implement a function getCardValue
// the function takes a single parameter, a string representing a playing card
// the function should return the numerical value of the card
// the first test and first case is written for you
// complete the rest of the tests and cases
// write one test at a time, and make it pass, build your solution up methodically
// just make one change at a time -- don't rush -- programmers are deep and careful thinkers

function getCardValue(card) {
  let rank = card[0];

  if (["♠", "♥", "♦", "♣"].includes(card.slice(-1))){
      if (card.length > 2) {
        rank = card.slice(0, card.length - 1);
      }
      if (rank === "A") return 11;
      if (["2", "3", "4", "5", "6", "7", "8", "9", "10"].includes(rank.toString()) )
        return rank;
      if (["J", "Q", "K"].includes(rank))
        return 10;
  }  

  throw new Error("Invalid card rank.");
}

// You need to write assertions for your function to check it works in different cases
// we're going to use this helper function to make our assertions easier to read
// if the actual output matches the target output, the test will pass
function assertEquals(actualOutput, targetOutput) {
  try {
    console.assert(
      actualOutput === targetOutput,
      `Expected ${actualOutput} to equal ${targetOutput}`
    );
  } catch (Error) {
    console.error("error!!"), Error.message;
  }
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
assertEquals(parseInt(fiveofHearts), 5);
// ====> write your test here, and then add a line to pass the test in the function above
const tenCards = getCardValue("10♥");
assertEquals(parseInt(tenCards), 10);
// Handle Face Cards (J, Q, K):
// Given a card with a rank of "10," "J," "Q," or "K",
// When the function is called with such a card,
// Then it should return the value 10, as these cards are worth 10 points each in blackjack.
const faceCards = getCardValue("J♥");
assertEquals(parseInt(faceCards), 10);
// Handle Ace (A):
// Given a card with a rank of "A",
// When the function is called with an Ace,
// Then it should, by default, assume the Ace is worth 11 points, which is a common rule in blackjack.
const aceCards = getCardValue("A♥");
assertEquals(aceCards, 11);
// Handle Invalid Cards:
// Given a card with an invalid rank (neither a number nor a recognized face card),
// When the function is called with such a card,
// Then it should throw an error indicating "Invalid card rank."
const invalidCards = getCardValue("223");
assertEquals(invalidCards, 0);
