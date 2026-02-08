function getCardValue(card) {
  // Ensure that the last char is a suit, otherwise throw an error
  const suits = ["♠", "♥", "♦", "♣"];
  if (!suits.includes(card.slice(-1))) {
    throw new Error("Please add the suit to the card face i.e. '5♥' ");
  }

  const rank = card.slice(0, -1);
  const validRank = [
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

  // Throw an error if an invalid card is entered
  if (!validRank.includes(rank)) {
    throw new Error("Please enter a valid card face");
  }

  // Return value if card rank is a number
  if (parseInt(rank)) {
    return parseInt(rank);
  }

  // Return 11 for "A" and 10 for "J", "Q", "K"
  if (rank === "A") {
    return 11;
  } else {
    return 10;
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

// ============= Valid Card Tests ===========
assertEquals(getCardValue("A♠"), 11);
assertEquals(getCardValue("K♥"), 10);
assertEquals(getCardValue("Q♦"), 10);
assertEquals(getCardValue("J♣"), 10);
assertEquals(getCardValue("9♠"), 9);
assertEquals(getCardValue("2♥"), 2);

// ============= Invalid Card Tests ===========
let invalidCard = "invalid";
try {
  getCardValue(invalidCard);
  console.error(`Error was not thrown for an invalid card (${invalidCard})`);
} catch (e) {}

invalidCard = 7;
try {
  getCardValue(invalidCard);
  console.error(`Error was not thrown for an invalid card (${invalidCard})`);
} catch (e) {}

invalidCard = "";
try {
  getCardValue(invalidCard);
  console.error(`Error was not thrown for an invalid card (${invalidCard})`);
} catch (e) {}

invalidCard = "AA♠";
try {
  getCardValue(invalidCard);
  console.error(`Error was not thrown for an invalid card (${invalidCard})`);
} catch (e) {}

invalidCard = "10♠♦";
try {
  getCardValue(invalidCard);
  console.error(`Error was not thrown for an invalid card (${invalidCard})`);
} catch (e) {}

invalidCard = "10";
try {
  console.log(getCardValue(invalidCard));
  getCardValue(invalidCard);
  console.error(`Error was not thrown for an invalid card (${invalidCard})`);
} catch (e) {}
