// Assignment: Get Card Value Function
// -----------------------------------
// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck
//
// You will need to implement a function getCardValue.
// The function takes a single parameter, a string representing a playing card.
// The function should return the numerical value of the card.
//
// Details:
// - The input card string will be in the format like "A♠", where the last character is always a suit emoji,
//   and all preceding characters represent the rank: a number (2-10) or one of the letters J, Q, K, A.
// - The function should return:
//    * 11 for Ace ("A")
//    * 10 for face cards ("J", "Q", "K") and the number "10"
//    * The numeric value for cards 2 through 9
// - If the card rank is invalid (not one of the above), the function should throw an error "Invalid card rank."
//
// You should write assertions (tests) to check your function for different cases:
//  - Ace card
//  - Number cards (2-9)
//  - Face cards (J, Q, K)
//  - The "10" card
//  - Invalid cards that should throw an error
//
// Write one test at a time, get it passing, then move on to the next.

// Implementation of the function
function getCardValue(card) {
if (!card || typeof card !== "string") {
  throw new Error("Invalid card format");
}

// Extract the rank by removing the last character (the suit)
const rank = card.slice(0, -1).trim();

// Handle Ace
if (rank === "A") return 11;

// Handle face cards and ten
if (rank === "J" || rank === "Q" || rank === "K" || rank === "10") return 10;

// Handle numeric cards 2-9
const rankNumber = Number(rank);
if (rankNumber >= 2 && rankNumber <= 9) {
  return rankNumber;
}

// Throw error for invalid rank
throw new Error("Invalid card rank.");

}
//parseInt(rank) and Number(rank) are the same thing. parseInt() is a function that parses a string and returns an integer. If the first character in the string can't be converted into a number, then it returns NaN. Number() is a function that converts a string to a number. If the string can't be converted into a number, then it returns NaN.
       if (rank === "A") return 11;
        //For numerical cards, we return the number
        else if (!isNaN(rank) >= 2 && Number(rank) <= 10) return Number(rank);
        //For face cards, we return 10
        else if ( rank === "J" || rank=== "Q" || rank ==="K" ) return 10;
        //If the card is invalid, we throw an error
        else return("Invalid card rank.");
  
    
    


// Assertion helper function
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// Tests:

// Test Ace card
const aceofSpades = getCardValue("A♠");
assertEquals(aceofSpades, 11);

// Test number card
const fiveofHearts = getCardValue("5♥");
assertEquals(fiveofHearts, 5);

// Test face cards: J, Q, K
const jackofDiamonds = getCardValue("J♦");
assertEquals(jackofDiamonds, 10);

const queenofClubs = getCardValue("Q♣");
assertEquals(queenofClubs, 10);

const kingofSpades = getCardValue("K♠");
assertEquals(kingofSpades, 10);

// Test 10 card
const tenofHearts = getCardValue("10♥");
assertEquals(tenofHearts, 10);

// Test Ace card
const aceofDiamonds = getCardValue("A♦");
assertEquals(aceofDiamonds, 11);

// Test invalid rank throws error
try {
  getCardValue("1♠");
  console.assert(false, "Expected error for invalid card rank");
} catch (e) {
  assertEquals(e.message, "Invalid card rank.");
}

