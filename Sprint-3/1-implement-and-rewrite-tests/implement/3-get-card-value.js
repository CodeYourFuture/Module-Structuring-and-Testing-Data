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
  if (typeof card !== "string" || card.length < 2) {
    throw new Error("Invalid card format");
  }

  const validSuits = ["♠", "♥", "♦", "♣"];
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

  const suit = card.slice(-1);
  const rank = card.slice(0, -1);

  if (!validSuits.includes(suit) || !validRanks.includes(rank)) {
    throw new Error("Invalid card format");
  }

  if (rank === "A") {
    return 11;
  } else if (rank === "J" || rank === "Q" || rank === "K") {
    return 10;
  } else {
    return Number(rank);
  }
}

// The line below allows us to load the getCardValue function into tests in other files.
module.exports = getCardValue;

// Helper function for value assertions
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// Helper function to assert that an error is thrown
function assertThrowsError(invalidInput) {
  let errorThrown = false;
  try {
    getCardValue(invalidInput);
  } catch (e) {
    errorThrown = true;
  }
  console.assert(
    errorThrown,
    `Expected an error to be thrown for input: "${invalidInput}"`
  );
}

console.log("Starting tests for getCardValue...");

// --- Number cards ---
assertEquals(getCardValue("2♥"), 2);
assertEquals(getCardValue("9♠"), 9);
assertEquals(getCardValue("10♥"), 10);

// --- Face cards ---
assertEquals(getCardValue("J♣"), 10);
assertEquals(getCardValue("Q♦"), 10);
assertEquals(getCardValue("K♦"), 10);

// --- Ace card ---
assertEquals(getCardValue("A♠"), 11);

// --- Invalid cards ---
assertThrowsError("invalid"); // random string
assertThrowsError("10"); // missing suit
assertThrowsError("A"); // missing suit
assertThrowsError("♠"); // missing rank
assertThrowsError("1♠"); // invalid rank
assertThrowsError("11♠"); // invalid rank
assertThrowsError("AX"); // invalid suit
assertThrowsError(""); // empty string

console.log("All tests completed!");
