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
   if (typeof card !== "string") {
    throw new Error("Invalid card");
  }
  let rank = card.slice(0, -1); // Get everything except the last character
  let suit = card.slice(-1);    //  Get the last character
  
  const validSuits = ["♠", "♥", "♦", "♣"]; // check if suit is valid
  if (!validSuits.includes(suit)) {
    throw new Error("Invalid card");
  }

  if (rank === "A"){
    return 11;
  }else if(/^[JQK]$/.test(rank)){
    return 10;
  }else if(rank.match(/^(10|[2-9])$/)){
    return Number(rank);
  }else throw new Error("Invalid card");
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
assertEquals(getCardValue("9♠"), 9);
assertEquals(getCardValue("A♦"), 11);
assertEquals(getCardValue("J♣"), 10);
assertEquals(getCardValue("Q♥"), 10);
assertEquals(getCardValue("K♠"), 10);
assertEquals(getCardValue("3♦"), 3);

try {
  getCardValue("J");

  // The below line will not be reached if an error is thrown as expected
  console.error("Error was not thrown for invalid card");
} catch (e) {
  console.log('Test passed for "J": caught error ->', e.message);
}
// What other invalid card cases can you think of?

try {
  getCardValue("9X");   // invalid suit
  console.error('Test failed for "9X": error was not thrown');
} catch (e) {
  console.log('Test passed for "9X": caught error ->', e.message);
}

try {
  getCardValue("1♠");   // invalid rank
  console.error('Test failed for "1♠": error was not thrown');
} catch (e) {
  console.log('Test passed for "1♠": caught error ->', e.message);
}

try {
  getCardValue("0♥");   // invalid rank
  console.error('Test failed for "0♥": error was not thrown');
} catch (e) {
  console.log('Test passed for "0♥": caught error ->', e.message);
}

try {
  getCardValue("ABC");  // completely wrong format
  console.error('Test failed for "ABC": error was not thrown');
} catch (e) {
  console.log('Test passed for "ABC": caught error ->', e.message);
}
