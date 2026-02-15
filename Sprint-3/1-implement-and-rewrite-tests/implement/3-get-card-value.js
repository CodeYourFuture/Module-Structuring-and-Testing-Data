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
  const validSuits = ["♠", "♥", "♦", "♣"];
  const validRanks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  const suit = card.slice(-1);
  const rank = card.slice(0, -1);

  
  if (!validSuits.includes(suit) || !validRanks.includes(rank)) {
    throw new Error("Invalid card");
  }

  if (rank === "A") return 11;
  if (["J", "Q", "K"].includes(rank)) return 10;

  return Number(rank);
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
// Examples 1 numbers:
assertEquals(getCardValue("9♠"), 9);
assertEquals(getCardValue("5♣"), 5);

//Examples  A:
assertEquals(getCardValue("A♦"), 11)

//Examples J Q K:, 
assertEquals(getCardValue("Q♥"), 10)
assertEquals(getCardValue("K♥"), 10)

//Examples invalid numbers:
assertThrow(()=>getCardValue("1♥"))
assertThrow(()=>getCardValue("11♥"))

//Examples invalid suit:
assertThrow(()=>getCardValue("A*"))

//Examples missing rank or suit:
assertThrow(()=>getCardValue("♥"))
assertThrow(()=>getCardValue("5"))

//Example extra suit:
assertThrow(()=>getCardValue("Q♠♠"))


function assertThrow(fn){
try { (fn)
  // we try to run this function, if it throws, stop running this bit and run the catch below

  // This line will not be reached if an error is thrown as expected
  console.error("Error was not thrown for invalid card");
} catch (error) {
  // if the above code throws, we catch the error here, that stops the whole program crashing
  console.log('there was an error getting card value!',error)
}}

console.log(' we finished running getCardValue')

// What other invalid card cases can you think of?

//Examples wrong type:
assertThrow(()=>getCardValue("null"))
assertThrow(()=>getCardValue("42"))
