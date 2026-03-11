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
  // Handling invalid cards
  const rank = card.slice(0, -1); //rank of the card is everything except the last character of card string
  const suit = card.slice(-1); // suit is the last character of the card string
  if (!isValidCard(rank, suit)) throw new Error("Invalid Card");
  if (rank === "J" || rank === "Q" || rank == "K") return 10;
  else if (rank == "A") return 11;
  else return Number(rank);
}

function isValidCard(rank, suit) {
  const ranks = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  const suits = ["♠", "♥", "♦", "♣"];
  if (ranks.includes(rank) && suits.includes(suit)) return true;
  else return false;
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

function assertThrows(fnGetCardValue) {
  try {
    fnGetCardValue(); // run the function
    console.assert(false, "Expected function to throw an error");
  } catch (err) {
    console.assert(err instanceof Error, "Expected an Error to be thrown");
  }
}

// TODO: Write tests to cover all outcomes, including throwing errors for invalid cards.
// Examples:
assertEquals(getCardValue("9♠"), 9);
assertEquals(getCardValue("10♠"), 10);
assertEquals(getCardValue("Q♠"), 10);
assertEquals(getCardValue("A♣"), 11);
assertEquals(getCardValue("2♠"), 2);
assertEquals(getCardValue("J♦"), 10);
assertEquals(getCardValue("K♠"), 10);

// using function wrapper in the below lines of code so instead of passing teh result of function I can pass the function here,
// and it is being called in try block of assertThrows function
assertThrows(() => getCardValue("Invalid"));
assertThrows(() => getCardValue("1Q"));
assertThrows(() => getCardValue("-10♦"));
assertThrows(() => getCardValue("♦K"));
assertThrows(() => getCardValue("Q♦♦"));
