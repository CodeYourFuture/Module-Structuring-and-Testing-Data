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
  const cardRank = card.slice(0, -1);
  const cardSuit = card.slice(-1);
  if (card.length < 2 || !["♠", "♥", "♦", "♣"].includes(cardSuit))
    throw new Error("invalid card suit");
  if (cardRank === "A") return 11;
  if (["J", "Q", "K"].includes(cardRank)) return 10;
  if (["2", "3", "4", "5", "6", "7", "8", "9", "10"].includes(cardRank))
    return cardRank; // the parseint() or Number() can be used to convert the string to a number
  throw new Error("invalid card rank");
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

assertEquals(getCardValue("A♥"), 11);
assertEquals(getCardValue("J♣"), 10);
assertEquals(getCardValue("Q♠"), 10);
assertEquals(getCardValue("2♦"), 2);

// Handling invalid cards
try {
  getCardValue("invalid");

  // This line will not be reached if an error is thrown as expected
  console.error("Error was not thrown for invalid card");
} catch (e) {}

// What other invalid card cases can you think of?
try {
  getCardValue("S");
  console.error("Error was not thrown for invalid card");
} catch (e) {}

try {
  getCardValue("AJKP");
  console.error("Error was not thrown for invalid card");
} catch (e) {}

try {
  getCardValue("A❦");
  console.error("Error was not thrown for invalid card");
} catch (e) {}

try {
  getCardValue("29");
  console.error("Error was not thrown for invalid card");
} catch (e) {}

try {
  getCardValue("♦,♣");
  console.error("Error was not thrown for invalid card");
} catch (e) {}

try {
  getCardValue("2345");
  console.error("Error was not thrown for invalid card");
} catch (e) {}

try {
  getCardValue("");
  console.error("Error was not thrown for invalid card");
} catch (e) {}
