function getCardValue(card) {
  const suits = ["♠", "♥", "♦", "♣"];

  if (typeof card !== "string" || card.length < 2) {
    throw new Error("Invalid card");
  }

  const suit = card.slice(-1);
  const rank = card.slice(0, -1);

  if (!suits.includes(suit)) {
    throw new Error("Invalid card");
  }

  // Ace
  if (rank === "A") return 11;

  // Face cards
  if (["J", "Q", "K"].includes(rank)) return 10;

  // Number cards (STRICT check)
  const validNumbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10"];

  if (validNumbers.includes(rank)) {
    return Number(rank);
  }

  // Everything else = invalid
  throw new Error("Invalid card");
}

<<<<<<< HEAD
module.exports = getCardValue;
=======
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

// Ace
assertEquals(getCardValue("A♠"), 11);

// Face cards
assertEquals(getCardValue("J♥"), 10);
assertEquals(getCardValue("Q♦"), 10);
assertEquals(getCardValue("K♣"), 10);

// Number cards
assertEquals(getCardValue("2♠"), 2);
assertEquals(getCardValue("10♥"), 10);

// Handling invalid cards
try {
  getCardValue("invalid");

  // This line will not be reached if an error is thrown as expected
  console.error("Error was not thrown for invalid card 😢");
} catch (e) {
  console.log("Error thrown for invalid card 🎉");
}

// More invalid cases
try {
  getCardValue("11♠");
  console.error("Error was not thrown for invalid card");
} catch (e) {}

try {
  getCardValue("A");
  console.error("Error was not thrown for invalid card");
} catch (e) {}

// What other invalid card cases can you think of?
>>>>>>> 983743526bc0a40a31b8e20926f23fa3ceb5cf29
