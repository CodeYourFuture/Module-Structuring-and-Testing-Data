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
  let rank = card.slice(0,-1);
   let cardFace = card[card.length - 1];

  if (!["♠", "♥", "♦", "♣"].includes(cardFace)) {
    throw new Error(`Invalid card face: ${cardFace}`);
  }
  if (rank === "A") {
    return 11;
  }
  if (+rank >= 2 && +rank <= 9) {
    return +rank;
  }
  if (["K", "10", "Q", "J"].includes(rank)) {
    return 10;
  }
  if (!["♠", "♥", "♦", "♣"].includes(cardFace)) {
  }
  throw new Error(`Invalid card`);
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
// (Ace All suits)
const aceOfSpades = getCardValue("A♠");
assertEquals(aceOfSpades, 11);

const aceOfHearts = getCardValue("A♥");
assertEquals(aceOfHearts, 11);

const aceOfDiamonds = getCardValue("A♦");
assertEquals(aceOfDiamonds, 11);

const aceOfClubs = getCardValue("A♣");
assertEquals(aceOfClubs, 11);

// (Face cards)
const jackOfHearts = getCardValue("J♥");
assertEquals(jackOfHearts, 10);

const queenOfClubs = getCardValue("Q♣");
assertEquals(queenOfClubs, 10);

const kingOfSpades = getCardValue("K♠");
assertEquals(kingOfSpades, 10);

// (Number cards) 
const threeOfDiamonds = getCardValue("3♦");
assertEquals(threeOfDiamonds, 3);

const sevenOfClubs = getCardValue("7♣");
assertEquals(sevenOfClubs, 7);        



// Handling invalid cards
// giving an invalid rank (a number or an recognized face card)
// When the function is called with such a card,
// Then it should throw an error indicating "Invalid card rank."
try {
  getCardValue("invalid");

  // This line will not be reached if an error is thrown as expected
  console.error("Error was not thrown for invalid card 😢");
} catch (e) {
  console.log("Error thrown for invalid card 🎉");
}

// What other invalid card cases can you think of?

try {
  getCardValue("1♠");
  console.error("Error was not thrown for invalid card rank");
} catch (error) {
  assertEquals(error.message, "Invalid card rank");
}

try {
  getCardValue("5X");
  console.error("Error was not thrown for invalid card suit");
} catch (error) {
  assertEquals(error.message, "Invalid card suit");
}