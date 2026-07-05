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
  const suits = ["♠", "♥", "♦", "♣"];
  if (card[0] === "A" && suits.includes(card[1]) && card.length === 2)
    return 11;
  if (
    (card[0] === "J" || card[0] === "Q" || card[0] === "K") &&
    suits.includes(card[1]) &&
    card.length === 2
  )
    return 10;
  if (
    ["2", "3", "4", "5", "6", "7", "8", "9"].includes(card[0]) &&
    suits.includes(card[1]) &&
    card.length === 2
  )
    return Number(card[0]);
  if (card.slice(0, 2) == "10" && suits.includes(card[2]) && card.length === 3)
    return 10;
  throw new Error(
    'Invalid input: Expected rank followed by a suit symbol. For example: "A♠", "2♥", "10♥", "J♣", "Q♦", "K♦"'
  );
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
assertEquals(getCardValue("Q♦"), 10);
assertEquals(getCardValue("K♣"), 10);
assertEquals(getCardValue("10♥"), 10);
assertEquals(getCardValue("2♦"), 2);
assertEquals(getCardValue("7♦"), 7);

// Handling invalid cards
try {
  getCardValue("invalid");

  // This line will not be reached if an error is thrown as expected
  console.error("Error was not thrown for invalid card 😢");
} catch (e) {
  console.log("Error thrown for invalid card 🎉");
}

// What other invalid card cases can you think of?
// for instance "1♦" where it starts with 1 but its not 10
// where it includes the correct answer but there are added characters maybe space(s) like "9♠ "
//where its the opposite way : "♠9"
//where it starts with a valid number but has otherwise more digits eg: "9♠♠" or "99♠"
//where there is a different symbol from the 4 given such as ❤️

try {
  getCardValue("1♥");

  // This line will not be reached if an error is thrown as expected
  console.error("Error was not thrown for invalid card 😢");
} catch (e) {
  console.log("Error thrown for invalid card 🎉");
}

try {
  getCardValue("9♠ ");

  // This line will not be reached if an error is thrown as expected
  console.error("Error was not thrown for invalid card 😢");
} catch (e) {
  console.log("Error thrown for invalid card 🎉");
}

try {
  getCardValue("♠9");

  // This line will not be reached if an error is thrown as expected
  console.error("Error was not thrown for invalid card 😢");
} catch (e) {
  console.log("Error thrown for invalid card 🎉");
}

try {
  getCardValue("99♠");

  // This line will not be reached if an error is thrown as expected
  console.error("Error was not thrown for invalid card 😢");
} catch (e) {
  console.log("Error thrown for invalid card 🎉");
}

try {
  getCardValue("9♠♠");

  // This line will not be reached if an error is thrown as expected
  console.error("Error was not thrown for invalid card 😢");
} catch (e) {
  console.log("Error thrown for invalid card 🎉");
}

try {
  getCardValue("9❤️");

  // This line will not be reached if an error is thrown as expected
  console.error("Error was not thrown for invalid card 😢");
} catch (e) {
  console.log("Error thrown for invalid card 🎉");
}
