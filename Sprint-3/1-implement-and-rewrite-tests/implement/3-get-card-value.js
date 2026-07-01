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

const suits = ["♠", "♥", "♦", "♣"];
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

function getCardValue(card) {
  if (typeof card !== "string" || card.length < 2 || card.length > 3) {
    throw new Error("Invalid card string");
  }
  const rank = card.slice(0, -1);
  const suit = card.slice(-1);

  if (!suits.includes(suit) || !ranks.includes(rank)) {
    throw new Error("Invalid card string");
  }

  if (rank === "A") {
    return 11;
  }
  if (rank === "J" || rank === "Q" || rank === "K") {
    return 10;
  }
  return parseInt(rank, 10);
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

// Test cases

const testCases = [
  ["A♠", 11],
  ["2♥", 2],
  ["10♥", 10],
  ["J♣", 10],
  ["Q♦", 10],
  ["K♦", 10],
  ["KK", undefined],
  ["A", undefined],
  ["2", undefined],
  ["3", undefined],
  ["44", undefined],
  ["AA1", undefined],
  ["", undefined],
];

// loop through each case and assert that the output is correct
for (const [card, expected] of testCases) {
  try {
    const actual = getCardValue(card);
    if (expected === undefined) {
      console.error("Error was not thrown for invalid card 😢");
    } else {
      assertEquals(actual, expected);
    }
  } catch (e) {
    if (expected === undefined) {
      console.log(`Successfully threw an error for invalid card "${card}" 🎉`);
    } else {
      console.error(`Unexpected error thrown for valid card "${card}": ${e.message} 😢`);
    }
  }
}