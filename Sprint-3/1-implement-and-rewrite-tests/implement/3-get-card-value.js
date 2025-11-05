// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// You will need to implement a function getCardValue
// the function takes a single parameter, a string representing a playing card
// the function should return the numerical value of the card
// the first test and first case is written for you
// complete the rest of the tests and cases
// write one test at a time, and make it pass, build your solution up methodically
// just make one change at a time -- don't rush -- programmers are deep and careful thinkers
function getCardValue(card) {
  if (typeof card !== "string") {
    throw new Error("Card must be a string")
  }

  if (card.length < 2) {
    throw new Error("Invalid card rank")
  }

  const rank = card.slice(0, -1);
  const suit = card.slice(-1);

  if (!["♠", "♥", "♦", "♣"].includes(suit)) {
    throw new Error("Invalid card suit");
  }

  if (rank === "A") return 11; // Ace 



  //const rank = card.slice(0, -1); // get the rank (before the suit symbol)


 // const num = Number(rank); // converting to a number.

  // if (!isNaN(rank)) {
  //   return num; // Number card
  // }

  if (rank === "J" || rank === "Q" || rank === "K") {
    return 10; // Face cards
  }

  if (!/^(?:[1-9]|10)$/.test(rank)) {
  throw new Error("Invalid card rank");
}
  // Reject weird or malformed ranks (like 3AAAA)

   const num = Number(rank);
   // Convert numeric string

   if (num >= 2 && num <= 10) {
    return num;
  }
  // Accept valid 2–10 range only




  // Anything else is invalid
   throw new Error("Invalid card rank")
  
} 


// console.log(Number("0x002"));
// console.log(Number("2.1"));
// console.log(Number("9e1"));
// console.log(Number("0002"));



// if the rank is not a number or a face card, throw an error(invalid card rank).

  // if (rank === "x") {
  //   return 11;
  // }



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

// Given a card string in the format "A♠" (representing a card in blackjack - the last character will always be an emoji for a suit, and all characters before will be a number 2-10, or one letter of J, Q, K, A),
// When the function getCardValue is called with this card string as input,
// Then it should return the numerical card value
const aceOfSpades = getCardValue("A♠");
assertEquals(aceOfSpades, 11);

// Handle Number Cards (2-10):
// Given a card with a rank between "2" and "9",
// When the function is called with such a card,
// Then it should return the numeric value corresponding to the rank (e.g., "5" should return 5).
const fiveOfHearts = getCardValue("5♥");
assertEquals(fiveOfHearts, 5);

const tenOfDiamonds = getCardValue("10♦");
assertEquals(tenOfDiamonds, 10);

// Handle Face Cards (J, Q, K):
// Given a card with a rank of "10," "J," "Q," or "K",
// When the function is called with such a card,
// Then it should return the value 10, as these cards are worth 10 points each in blackjack.
const jackOfClubs = getCardValue("J♣");
assertEquals(jackOfClubs, 10);

const queenOfHearts = getCardValue("Q♥");
assertEquals(queenOfHearts, 10);

const kingOfSpades = getCardValue("K♠");
assertEquals(kingOfSpades, 10);
// Handle Ace (A):
// Given a card with a rank of "A",
// When the function is called with an Ace,
// Then it should, by default, assume the Ace is worth 11 points, which is a common rule in blackjack.

// Handle Invalid Cards:
// Given a card with an invalid rank (neither a number nor a recognized face card),
// When the function is called with such a card,
// Then it should throw an error indicating "Invalid card rank."
try {
  getCardValue("Z♠");
} catch (error) {
  console.log("Caught error:", error.message); // Should say "Invalid card rank"
}
