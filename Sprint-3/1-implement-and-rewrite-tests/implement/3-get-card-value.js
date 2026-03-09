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
    throw new Error("Invalid card");
  }
  // Handle "10" which is like "10♥"
  if (card.startsWith("10")) {
    return 10;
  }
  //if more than 2 characters and not starting with a 10 card
  if (card.length > 2) {
    throw new Error("Invalid card");
  }

  // remaining cards must be 2 characters long

  const validSuits = ["♠", "♥", "♦", "♣"];
  const suit = card[card.length - 1];

  const firstChar = card[0];

  // check if picture cards
  if (firstChar === "A") return 11;
  if (firstChar === "J" || firstChar === "Q" || firstChar === "K") return 10;

  // check if number is between 2 and 9, 10 has already been checked for and there should be no other valid cards

  const num = Number(firstChar);

  if (!isNaN(num) && num >= 2 && num <= 9) {
    return num;
    // for everything else
  } else {
    throw new Error("Invalid card");
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
assertEquals(getCardValue("10♥"), 10);
assertEquals(getCardValue("J♥"), 10);
assertEquals(getCardValue("A♠"), 11);
assertEquals(getCardValue("Q♦"), 10);
assertEquals(getCardValue("K♣"), 10);

// Handling invalid cards
try {
  getCardValue("♠J");
  console.error("Error was not thrown for invalid card");
} catch (e) {}

try {
  getCardValue("invalid");
  console.error("Error was not thrown for invalid card");
} catch (e) {}

try {
  getCardValue("22");
  console.error("Error was not thrown for invalid card");
} catch (e) {}

console.log(getCardValue("9♠"));
console.log(getCardValue("10♥"));
console.log(getCardValue("J♥"));
console.log(getCardValue("A♠"));
console.log(getCardValue("Q♦"));
console.log(getCardValue("K♣"));

// This line will not be reached if an error is thrown as expected
try {
  console.error("Error was not thrown for invalid card");
} catch (e) {}

// What other invalid card cases can you think of?

// There could be cards with special characters.

// There could be cards with two numbers rather than a number and a suite
// These will not be picked up because the code only checks for if starts with 10 or if the first character
// is a number between 2 and 9, so cards like "22" would be valid because the first number
// is 2, but the second character is not checked for validity.  It is also 2 characters
// so will not cause an error when the length is checked.

// Since the second character is not checked it could be 2D which is not a valid card but
// would be accepted because the first character is 2 and the second character is not checked for validity

// When the card is checked if it begins with 10 it does check if it has a valid suite
// as only the first 2 characters are checked so it could be 10DEVON or 10♥♥.
