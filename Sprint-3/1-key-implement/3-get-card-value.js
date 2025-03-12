// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// You will need to implement a function getCardValue
// the function takes a single parameter, a string representing a playing card
// the function should return the numerical value of the card
// the first test and first case is written for you
// complete the rest of the tests and cases
// write one test at a time, and make it pass, build your solution up methodically
// just make one change at a time -- don't rush -- programmers are deep and careful thinkers
function getCardValue(card) {
  let rank = card.slice(0, -1); // Extract the rank by removing the suit
  if (/[^0-9A-K]/.test(rank)) {
    throw new Error("Invalid Card Rank");
  } 
  if (rank === "A") return 11;
  else if (rank === "10") return 10;
  else if (rank >= 2 && rank <= 9) return Number(rank);
  else if (["K", "Q", "J"].includes(rank)) return 10;
  else return "Invalid Card Rank";
}

// You need to write assertions for your function to check it works in different cases
// we're going to use this helper function to make our assertions easier to read
// if the actual output matches the target output, the test will pass
function assertEquals(actualOutput, targetOutput) {
  try {
    if (typeof targetOutput === "number") {
      console.assert(actualOutput === targetOutput, `Expected ${actualOutput} to equal ${targetOutput}`);
    } else {
      // If we expect an error, we check if one was thrown
      throw new Error("Expected error but none was thrown");
    }
  } catch (e) {
    console.assert(e.message === targetOutput, `Expected error message '${targetOutput}' but got '${e.message}'`);
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
// ====> write your test here, and then add a line to pass the test in the function above
assertEquals(fiveofHearts, 5);


// Handle Face Cards (J, Q, K):
// Given a card with a rank of "10," "J," "Q," or "K",
// When the function is called with such a card,
// Then it should return the value 10, as these cards are worth 10 points each in blackjack.
const queenofHarts = getCardValue("Q♥");
assertEquals(queenofHarts, 10);


// Handle Ace (A):
// Given a card with a rank of "A",
// When the function is called with an Ace,
// Then it should, by default, assume the Ace is worth 11 points, which is a common rule in blackjack.
const aceofHearts = getCardValue("A♥");
assertEquals(aceofHearts, 11);


// Handle Invalid Cards:
// Given a card with an invalid rank (neither a number nor a recognized face card),
// When the function is called with such a card,
// Then it should throw an error indicating "Invalid card rank.
try {
  const joker = getCardValue("1🃏");
  assertEquals(joker, "Invalid Card Rank"); // This will no longer be hit since error is thrown
} catch (e) {
  assertEquals(e.message, "Invalid Card Rank");
}


const tenofSpades = getCardValue("010♠");
assertEquals(tenofSpades, 10);
