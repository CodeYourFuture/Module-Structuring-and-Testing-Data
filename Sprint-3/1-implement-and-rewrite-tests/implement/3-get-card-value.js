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
  const rank = card.slice(0, -1);
  const suit = card.slice(-1);

  const validSuits = ["♠", "♥", "♦", "♣"];
  const faceCards = ["10", "J", "Q", "K"];
  const numberCards = ["2", "3", "4", "5", "6", "7", "8", "9"];

  if (!validSuits.includes(suit)) {
    throw new Error("Invalid card suit");
  }

  if (rank === "A") return 11;
  if (faceCards.includes(rank)) return 10;
  if (numberCards.includes(rank)) return Number(rank);

  throw new Error("Invalid card rank");
}

module.exports = getCardValue;

function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

assertEquals(getCardValue("9♠"), 9);
assertEquals(getCardValue("5♥"), 5);
assertEquals(getCardValue("K♦"), 10);
assertEquals(getCardValue("A♣"), 11);

try {
  getCardValue("invalid");
  console.error("Error was not thrown for completely invalid card");
} catch (error) {}

try {
  getCardValue("1♠");
  console.error("Error was not thrown for invalid card rank");
} catch (error) {
  assertEquals(error.message, "Invalid card rank");
}

try {
  getCardValue("5X");
  console.error("Error was not thrown for invalid card suit");
} catch (error) {
  assertEquals(error.message, "Invalid card suit");
}