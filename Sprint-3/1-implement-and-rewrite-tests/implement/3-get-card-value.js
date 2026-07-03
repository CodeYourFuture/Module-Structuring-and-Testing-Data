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
  const suit = card.replaceAll(/[\w\d\s]/g, "");
  const value = card.replaceAll(/[^\w\d\s]/g, "");
  const face = ["J", "Q", "K"];
  const validSuits = ["♠", "♥", "♦", "♣"];
  const validValue = [
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

  if (
    !validSuits.includes(suit) ||
    !validValue.includes(value) ||
    card !== value + suit
  ) {
    throw new Error("Invalid card");
  }

  if (validSuits.includes(suit)) {
    switch (true) {
      case Number(value) <= 10 && Number(value) >= 2:
        return Number(value);
      case value === "A":
        return 11;
      case face.includes(value):
        return 10;
    }
  }

  return "Invalid card";
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

// Test number cards
assertEquals(getCardValue("2♠"), 2);
assertEquals(getCardValue("5♥"), 5);
assertEquals(getCardValue("9♦"), 9);
assertEquals(getCardValue("10♣"), 10);

// Test aces
assertEquals(getCardValue("A♠"), 11);
assertEquals(getCardValue("A♥"), 11);
assertEquals(getCardValue("A♦"), 11);
assertEquals(getCardValue("A♣"), 11);

// Test face cards
assertEquals(getCardValue("J♠"), 10);
assertEquals(getCardValue("Q♥"), 10);
assertEquals(getCardValue("K♦"), 10);

// Handling invalid cards
try {
  getCardValue("invalid");

  // This line will not be reached if an error is thrown as expected
  console.error("Error was not thrown for invalid card 😢");
} catch (e) {
  console.log("Error thrown for invalid card 🎉");
}

// What other invalid card cases can you think of?

function errorThrown(card) {
  try {
    getCardValue(card);
    console.error(`Expected "${card}" to throw an error 😢`);
  } catch (error) {
    console.log(`"${card}" Error thrown for invalid card 🎉`);
  }
}

// Missing a suit
errorThrown("9");

// Missing a rank
errorThrown("♠");

// Invalid rank
errorThrown("1♠");
errorThrown("11♠");
errorThrown("Z♠");

// Invalid suit
errorThrown("9X");

// Suit and rank in the wrong order
errorThrown("♠9");

// Extra characters
errorThrown("9♠hello");
errorThrown("A♠♠");

// Spaces
errorThrown("9 ♠");
errorThrown(" 9♠");
errorThrown("9♠ ");

// Empty or incorrectly capitalised
errorThrown("");
errorThrown("a♠");
errorThrown("j♠");
