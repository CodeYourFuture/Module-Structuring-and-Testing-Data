// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// You will need to implement a function getCardValue
// the function takes a single parameter, a string representing a playing card
// the function should return the numerical value of the card
// the first test and first case is written for you
// complete the rest of the tests and cases
// write one test at a time, and make it pass, build your solution up methodically
// just make one change at a time -- don't rush -- programmers are deep and careful thinkers

function getCardValue(card) {
  // Extract rank (all characters except final suit emoji)
  const rank = card.slice(0, -1);

  // Mapping for face card values
  const faceValues = {
    J: 10,
    Q: 10,
    K: 10,
    A: 11,
  };

  // If rank is a face card, return mapped value
  if (faceValues[rank]) {
    return faceValues[rank];
  }

  // Valid number ranks 2–10 only
  const validNumberRanks = ["2", "3", "4", "5", "6", "7", "8", "9", "10"];

  if (validNumberRanks.includes(rank)) {
    return Number(rank);
  }

  // Anything else = invalid
  throw new Error("Invalid card rank");
}

// The line below allows us to load the getCardValue function into tests in other files.
// This will be useful in the "rewrite tests with jest" step.
module.exports = getCardValue;

// You need to write assertions for your function to check it works in different cases
// we're going to use this helper function to make our assertions easier to read
// if the actual output matches the target output, the test will pass
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// ---------------- TESTS ----------------

// Handle Ace (A)
const aceOfSpades = getCardValue("A♠");
assertEquals(aceOfSpades, 11);

// Handle Number Cards (2-9)
const fiveOfHearts = getCardValue("5♥");
assertEquals(fiveOfHearts, 5);

// Handle 10
const tenOfClubs = getCardValue("10♣");
assertEquals(tenOfClubs, 10);

// Handle Face Cards (J, Q, K)
const queenOfDiamonds = getCardValue("Q♦");
assertEquals(queenOfDiamonds, 10);

// Handle invalid card
try {
  getCardValue("15♣"); // invalid rank
  console.assert(false, "Expected error for invalid rank");
} catch (e) {
  console.assert(true);
}
