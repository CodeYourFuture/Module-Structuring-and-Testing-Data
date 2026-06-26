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
  // TODO: Implement this function
  const cardRanks = "A,2,3,4,5,6,7,8,9,10,J,Q,K".split(",");
  const cardSuits = "♠,♥,♦,♣".split(",");

  // Throw error if card is empty
  if (!card) throw new Error(`Invalid card`);

  const cardSuit = card[card.length - 1];
  // Throw error is card suit is not valid
  if (!cardSuits.includes(cardSuit)) {
    throw new Error(`Invalid card suit`);
  }

  const cardRank = card.slice(0, -1);
  // Throw error is cardRank is not valid
  if (!cardRanks.includes(cardRank)) {
    throw new Error(`Invalid card rank`);
  }

  // Return the card value based on given rank
  if (cardRank === "A") return 11;
  if (["J", "Q", "K"].includes(cardRank)) return 10;
  return Number(cardRank);
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
assertEquals(getCardValue("J♥"), 10);
assertEquals(getCardValue("Q♣"), 10);
assertEquals(getCardValue("K♠"), 10);
assertEquals(getCardValue("A♥"), 11);
assertEquals(getCardValue("10♦"), 10);

// Handling invalid cards
function assertErrors(func, errorMessage) {
  try {
    func();
    console.error("Error was not thrown for invalid card 😢");
  } catch (error) {
    console.assert(
      error.message.includes(errorMessage),
      `Expected error: ${errorMessage}, got: ${error.message}`
    );
    console.log("Error thrown for invalid card 🎉");
  }
}

function testInvalidCards() {
  const invalidCardCases = [
    ["A", "Invalid card suit"],
    ["11♠", "Invalid card rank"],
    ["N♠", "Invalid card rank"],
    ["7K", "Invalid card suit"],
    ["", "Invalid card"],
  ];

  invalidCardCases.forEach(([card, message]) => {
    console.log("-".repeat(50));
    console.log(`Card: ${card}, Message: ${message}`);
    assertErrors(() => getCardValue(card), message);
  });
}

testInvalidCards();
