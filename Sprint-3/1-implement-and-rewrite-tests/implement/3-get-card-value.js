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
  const validSuits = ["♠", "♥", "♦", "♣"];
  if (typeof card !== "string")
    throw new Error(
      `Invalid card format: "${card}". Expected rank followed by suit, for example A♠, 10♥, K♦, or 7♣.`
    );

  let cardSuit = card.slice(-1);
  let cardRank = card.slice(0, -1);

  if (validSuits.find((suit) => suit === cardSuit)) {
    console.log(cardSuit);
    switch (cardRank) {
      case "A":
        console.log(cardRank, "ace rank");
        return 11;

      case "J":
      case "Q":
      case "K":
        console.log(cardRank, "face rank");
        return 10;

      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "10":
        console.log(cardRank, "number rank");
        return Number(cardRank);

      default:
        throw new Error(
          `Invalid card format: "${card}". Expected rank followed by suit, for example A♠, 10♥, K♦, or 7♣.`
        );
    }
  } else
    throw new Error(
      `Invalid card format: "${card}". Expected rank followed by suit, for example A♠, 10♥, K♦, or 7♣.`
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

assertEquals(getCardValue("4♣"), 4);

assertEquals(getCardValue("A♥"), 11);

assertEquals(getCardValue("J♦"), 10);

assertEquals(getCardValue("Q♣"), 10);

assertEquals(getCardValue("K♠"), 10);

assertEquals(getCardValue("K♦"), 10);

assertEquals(getCardValue("10♥"), 10);

assertEquals(getCardValue("2♦"), 2);

// Handling invalid cards
try {
  getCardValue("invalid");

  // This line will not be reached if an error is thrown as expected
  console.error("Error was not thrown for invalid card");
} catch (err) {
  console.error(err);
}

// What other invalid card cases can you think of?

try {
  getCardValue("");

  // This line will not be reached if an error is thrown as expected
  console.error("Error was not thrown for invalid card");
} catch (err) {
  console.error(err);
}

try {
  getCardValue("1♥");

  // This line will not be reached if an error is thrown as expected
  console.error("Error was not thrown for invalid card");
} catch (err) {
  console.error(err);
}

try {
  getCardValue("11♠");

  // This line will not be reached if an error is thrown as expected
  console.error("Error was not thrown for invalid card");
} catch (err) {
  console.error(err);
}

try {
  getCardValue("0♦");

  // This line will not be reached if an error is thrown as expected
  console.error("Error was not thrown for invalid card");
} catch (err) {
  console.error(err);
}

try {
  getCardValue("4.8♣");

  // This line will not be reached if an error is thrown as expected
  console.error("Error was not thrown for invalid card");
} catch (err) {
  console.error(err);
}

try {
  getCardValue("G♦");

  // This line will not be reached if an error is thrown as expected
  console.error("Error was not thrown for invalid card");
} catch (err) {
  console.error(err);
}

try {
  getCardValue("9");

  // This line will not be reached if an error is thrown as expected
  console.error("Error was not thrown for invalid card");
} catch (err) {
  console.error(err);
}

try {
  getCardValue("K");

  // This line will not be reached if an error is thrown as expected
  console.error("Error was not thrown for invalid card");
} catch (err) {
  console.error(err);
}

try {
  getCardValue("9M");

  // This line will not be reached if an error is thrown as expected
  console.error("Error was not thrown for invalid card");
} catch (err) {
  console.error(err);
}

try {
  getCardValue("♠3");

  // This line will not be reached if an error is thrown as expected
  console.error("Error was not thrown for invalid card");
} catch (err) {
  console.error(err);
}

try {
  getCardValue(6);

  // This line will not be reached if an error is thrown as expected
  console.error("Error was not thrown for invalid card");
} catch (err) {
  console.error(err);
}

try {
  getCardValue("A♦!");

  // This line will not be reached if an error is thrown as expected
  console.error("Error was not thrown for invalid card");
} catch (err) {
  console.error(err);
}

try {
  getCardValue("♥");

  // This line will not be reached if an error is thrown as expected
  console.error("Error was not thrown for invalid card");
} catch (err) {
  console.error(err);
}
