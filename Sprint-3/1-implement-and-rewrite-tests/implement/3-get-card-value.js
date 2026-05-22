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

/**
 * Returns the numerical value of a playing card.
 *
 * A standard deck has 4 suits: ♠ (spades), ♥ (hearts), ♦ (diamonds), ♣ (clubs)
 * Each card is written as a rank followed by a suit symbol e.g. "A♠", "10♥", "K♦"
 *
 * @param {string} card - A string representing a playing card e.g. "A♠", "10♥", "K♦", "7♣"
 * @returns {number} - The numerical value of the card:
 *   - Ace ("A") returns 11
 *   - Face cards ("J", "Q", "K") return 10
 *   - Number cards ("2" to "10") return their numeric value
 * @throws {Error} - If the card string is not in a valid format e.g. "invalid" or "1♠"
 *
 * @example
 * getCardValue("A♠") // returns 11
 * getCardValue("10♥") // returns 10
 * getCardValue("K♦") // returns 10
 * getCardValue("7♣") // returns 7
 */
function getCardValue(card) {
  // TODO: Implement this function
  // NEW: The suit symbol (♠ ♥ ♦ ♣) always takes up 2 characters in JavaScript
  // slice(0, -2) means "give me everything except the last 2 characters"
  // so "A♠" becomes "A", "10♥" becomes "10", "K♦" becomes "K"
  // MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
  const rank = card.slice(0, -1);

  // ✨ NEW: Ace is always worth 11
  if (rank === "A") return 11;

  // ✨ NEW: Face cards - Jack, Queen and King are all worth 10
  if (rank === "J" || rank === "Q" || rank === "K") return 10;

  // ✨ NEW: Number() converts a string like "9" into the actual number 9
  // so we can check if it falls in the valid range of 2 to 10
  // MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
  const numValue = Number(rank);
  if (numValue >= 2 && numValue <= 10) return numValue;

  // ✨ NEW: If we reach this line, none of the above matched
  // throw stops the function and sends an error back to whoever called it
  // MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
  throw new Error(`Invalid card: ${card}`);
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

// Ace cards - always 11 regardless of suit
assertEquals(getCardValue("A♠"), 11);
assertEquals(getCardValue("A♥"), 11);

// Number cards - return their face value as a number
assertEquals(getCardValue("2♦"), 2); // boundary: lowest number card
assertEquals(getCardValue("9♣"), 9);
assertEquals(getCardValue("10♥"), 10); // boundary: highest number card

// Face cards - Jack, Queen and King all return 10
assertEquals(getCardValue("J♣"), 10);
assertEquals(getCardValue("Q♦"), 10);
assertEquals(getCardValue("K♠"), 10);

// Handling invalid cards
// try/catch lets us test that an error IS thrown
// try: runs the code. catch: catches the error if one is thrown
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
try {
  getCardValue("invalid");
  // This line will not be reached if an error is thrown as expected
  console.error("Error was not thrown for invalid card ");
} catch (e) {
  console.log("Error thrown for invalid card ");
}

// What other invalid card cases can you think of?

try {
  getCardValue("1♠"); // 1 is not a valid rank - valid ranks are 2 through A
  console.error("Error was not thrown for rank 1 ");
} catch (e) {
  console.log("Error thrown for rank 1 ");
}

try {
  getCardValue("11♥"); // 11 is not a valid rank - valid ranks are 2 through A
  console.error("Error was not thrown for rank 11 ");
} catch (e) {
  console.log("Error thrown for rank 11 ");
}

try {
  getCardValue("A"); // missing suit
  console.error("Error was not thrown for missing suit ");
} catch (e) {
  console.log("Error thrown for missing suit ");
}
