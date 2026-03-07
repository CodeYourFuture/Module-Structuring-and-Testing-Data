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
  const rank = card.slice(0, -1);
  const suit = card.slice(-1);

  // Validate the suit
  const validSuits = ["♠", "♥", "♦", "♣"];
  if (!validSuits.includes(suit)) {
    throw new Error("Invalid card: Invalid suit");
  }

  if (rank === "A") {
    return 11;
  } else if (["J", "Q", "K"].includes(rank)) {
    return 10;
  } else if (["2", "3", "4", "5", "6", "7", "8", "9", "10"].includes(rank)) {
    return Number(rank); // Convert the rank string to a number
  } else {
    throw new Error("Invalid card: Invalid rank");
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
assertEquals(getCardValue("A♥"), 11);
assertEquals(getCardValue("Q♣"), 10);
assertEquals(getCardValue("K♠"), 10);

// Handling invalid cards
try {
  getCardValue("invalid");

  // This line will not be reached if an error is thrown as expected
  console.error("Error was not thrown for invalid card");
} catch (e) {}

// What other invalid card cases can you think of?
try {
  getCardValue("11♠");

  // This line will not be reached if an error is thrown as expected
  console.error("Error was not thrown for invalid card");
} catch (e) {}

try {
  getCardValue("A♤");

  // This line will not be reached if an error is thrown as expected
  console.error("Error was not thrown for invalid card");
} catch (e) {}
