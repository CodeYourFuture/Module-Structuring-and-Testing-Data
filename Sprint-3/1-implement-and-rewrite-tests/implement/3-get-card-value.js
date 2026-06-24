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
function generateValidCards() {
  const ranks = "A,2,3,4,5,6,7,8,9,10,J,Q,K".split(",");
  const suites = "♠,♥,♦,♣".split(",");
  const validCards = new Set();
  for (const rank of ranks) {
    for (const suite of suites) {
      validCards.add(rank + suite);
    }
  }
  return validCards;
}

function getCardValue(card) {
  // TODO: Implement this function
  const validCards = generateValidCards();
  if (!validCards.has(card)) {
    throw new Error("invalid");
  }

  let cardValue = card.slice(0, -1);
  if (cardValue === "A") return 11;
  if (cardValue === "J" || cardValue === "Q" || cardValue === "K") return 10;
  return Number(cardValue);
}

// The line below allows us to load the getCardValue function into tests in other files.
// This will be useful in the "rewrite tests with jest" step.
module.exports = getCardValue;

// Helper functions to make our assertions easier to read.
function assertEquals(card, targetOutput) {
  try {
    const actualOutput = getCardValue(card);
    console.assert(
      actualOutput === targetOutput,
      `Expected ${actualOutput} to equal ${targetOutput}`
    );
    console.error("Error was not thrown for invalid card 😢");
  } catch (e) {
    console.log("Error thrown for invalid card 🎉");
  }
  console.log("-".repeat(45));
}

// TODO: Write tests to cover all outcomes, including throwing errors for invalid cards.

assertEquals("9♠", 9);
assertEquals("A", 11);
assertEquals("Q", 10);
assertEquals("5", 5);
assertEquals("A♣", 11);
assertEquals("Q♣", 11);
assertEquals("A♦", 10);
