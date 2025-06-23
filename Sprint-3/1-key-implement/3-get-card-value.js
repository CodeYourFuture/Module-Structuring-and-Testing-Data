// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// You will need to implement a function getCardValue
// the function takes a single parameter, a string representing a playing card
// the function should return the numerical value of the card
// the first test and first case is written for you
// complete the rest of the tests and cases
// write one test at a time, and make it pass, build your solution up methodically
// just make one change at a time -- don't rush -- programmers are deep and careful thinkers
function getCardValue(card) {
    var rank = card.slice(0, -1); // get the rank of the card by removing the last character. (the suit is the last character)
    if (rank === "A") return 11; // this checks for Aces
    // Handle Number Cards (2-9)
    if (rank === "2") return 2; // this checks for the twos
    if (rank === "3") return 3; // this checks for the threes
    if (rank === "4") return 4; // this checks for the fours
    if (rank === "5") return 5; // this should check for fives
    if (rank === "6") return 6; // this checks for the sixes
    if (rank === "7") return 7; // this checks for the sevens
    if (rank === "8") return 8; // this checks for the eights
    if (rank === "9") return 9; // this checks for the nines
    // Handle Face Cards (J, Q, K) And 10's
    if (rank === "J") return 10; // this checks for Jacks
    if (rank === "Q") return 10; // this checks for Queens
    if (rank === "K") return 10; // this checks for Kings
    if (rank === "10") return 10; // this checks for Tens
    // if none of the above its an invalid card and throw an error
    throw new Error("Invalid card rank."); // this will throw an error if the card is not a valid rank
}
// You need to write assertions for your function to check it works in different cases
// we're going to use this helper function to make our assertions easier to read
// if the actual output matches the target output, the test will pass
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}
// Acceptance criteria:

// Given a card string in the format "A♠" (representing a card in blackjack - the last character will always be an emoji for a suit, and all characters before will be a number 2-10, or one letter of J, Q, K, A),
// When the function getCardValue is called with this card string as input,
// Then it should return the numerical card value
const aceofSpades = getCardValue("A♠");
assertEquals(aceofSpades, 11);

// Handle Number Cards (2-10):
// Given a card with a rank between "2" and "9",
// When the function is called with such a card,
// Then it should return the numeric value corresponding to the rank (e.g., "5" should return 5).
// ====> write your test here, and then add a line to pass the test in the function above
const fiveofHearts = getCardValue("5♥");
const sixofDiamonds = getCardValue("6♦");
const sevenofClubs = getCardValue("7♣");
const eightofSpades = getCardValue("8♠");
assertEquals(fiveofHearts, 5);
assertEquals(sixofDiamonds, 6);
assertEquals(sevenofClubs, 7);
assertEquals(eightofSpades, 8);

// Handle Face Cards (J, Q, K):
// Given a card with a rank of "10," "J," "Q," or "K",
// When the function is called with such a card,
// Then it should return the value 10, as these cards are worth 10 points each in blackjack.
const jackOfDiamonds = getCardValue("J♦");
const queenOfClubs = getCardValue("Q♣");
const kingOfSpades = getCardValue("K♠"); 
assertEquals(jackOfDiamonds, 10);
assertEquals(queenOfClubs, 10);
assertEquals(kingOfSpades, 10);

// When the function is called with an Ace,
// Then it should, by default, assume the Ace is worth 11 points, which is a common rule in blackjack.

// Handle Invalid Cards:
// Given a card with an invalid rank (neither a number nor a recognized face card),
// When the function is called with such a card,
// Then it should throw an error indicating "Invalid card rank."
try {
  getCardValue("z♠"); // this should throw an error of "Invalid card rank."
  console.log("Test failed: Expected an error for invalid card rank.");
} catch(error){
  assertEquals(error.message, "Invalid card rank.");
}