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
  const validRanks = [
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
  const validSuits = ["♠", "♥", "♦", "♣"];

  // Suit is always the last character
  const suit = card.slice(-1);

  // Rank is everything before the suit
  const rank = card.slice(0, -1);

  // Validate rank and suit
  if (!validRanks.includes(rank) || !validSuits.includes(suit)) {
    throw new Error("Invalid card");
  }

  // Convert rank to value
  if (rank === "A") return 11;
  if (["J", "Q", "K"].includes(rank)) return 10;

  // Number card
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
// Examples:
assertEquals(getCardValue("9♠"), 9);
assertEquals(getCardValue("A♣"), 11);
assertEquals(getCardValue("J♦"), 10);
assertEquals(getCardValue("Q♥"), 10);
assertEquals(getCardValue("K♠"), 10);
assertEquals(getCardValue("2♠"), 2);
assertEquals(getCardValue("10♦"), 10);

// Handling invalid cards
try {
  getCardValue("invalid");

  // This line will not be reached if an error is thrown as expected
  console.error("Error was not thrown for invalid card 😢");
} catch (e) {
  console.log("Error thrown for invalid card 🎉");
}

// What other invalid card cases can you think of?
try {
  getCardValue("1♠"); // invalid rank
  console.error("Error was not thrown for invalid rank");
} catch (e) {
  console.log("Error thrown for invalid rank 🎉");
}

try {
  getCardValue("A?"); // invalid suit
  console.error("Error was not thrown for invalid suit");
} catch (e) {
  console.log("Error thrown for invalid suit 🎉");
}

try {
  getCardValue("10"); // missing suit
  console.error("Error was not thrown for missing suit");
} catch (e) {
  console.log("Error thrown for missing suit 🎉");
}

try {
  getCardValue(""); // empty string
  console.error("Error was not thrown for empty string");
} catch (e) {
  console.log("Error thrown for empty string 🎉");
}
