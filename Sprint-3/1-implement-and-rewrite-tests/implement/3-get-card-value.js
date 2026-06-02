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
  // Student-friendly step-by-step parsing and validation.
  // 1) Expect a string like "A♠", "10♥", "K♦" where the last character is the suit emoji
  // 2) The rank is everything before the final character (so "10" or "A")
  // 3) Check the suit is one of the four allowed suits, and the rank is valid

  if (typeof card !== "string") {
    throw new Error('Card must be a string, e.g. "A♠"');
  }

  const text = card.trim();
  if (text.length < 2) {
    throw new Error(
      'Invalid card: too short. Expect a rank and a suit, e.g. "10♠"'
    );
  }

  // The suit is the last character, the rank is the rest
  const suit = text[text.length - 1];
  const rank = text.slice(0, -1);

  const validSuits = new Set(["♠", "♥", "♦", "♣"]);
  if (!validSuits.has(suit)) {
    throw new Error(`Invalid suit "${suit}". Use one of: ♠ ♥ ♦ ♣`);
  }

  // Handle special ranks first
  if (rank === "A") return 11;
  if (rank === "J" || rank === "Q" || rank === "K") return 10;

  // Otherwise expect a number between 2 and 10
  const n = Number(rank);
  if (Number.isInteger(n) && n >= 2 && n <= 10) return n;

  // If we get here, the rank wasn't recognised
  throw new Error(`Invalid rank "${rank}". Use A, 2-10, J, Q or K`);
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

// Handling invalid cards
try {
  getCardValue("invalid");

  // This line will not be reached if an error is thrown as expected
  console.error("Error was not thrown for invalid card 😢");
} catch (e) {
  console.log("Error thrown for invalid card 🎉");
}

// What other invalid card cases can you think of?

// === Student-friendly examples ===
// These examples show how the function behaves. Run the file with node to see messages.
console.log("\nRunning student-friendly examples for getCardValue:");

// Good cards
console.log("A♠ =>", getCardValue("A♠"), "(expected 11)");
console.log("K♦ =>", getCardValue("K♦"), "(expected 10)");
console.log("10♥ =>", getCardValue("10♥"), "(expected 10)");
console.log("3♣ =>", getCardValue("3♣"), "(expected 3)");

// Examples that should throw (wrapped in try/catch so the script keeps running)
const examples = ["invalid", "9x", "a♠", ""];
examples.forEach((example) => {
  try {
    const v = getCardValue(example);
    console.log(`${example} => ${v} (unexpected: should have thrown)`);
  } catch (e) {
    console.log(`${example} => throws: ${e.message}`);
  }
});

console.log("\nCompleted student-friendly examples");
