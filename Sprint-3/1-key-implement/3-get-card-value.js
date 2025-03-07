// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// You will need to implement a function getCardValue
// the function takes a single parameter, a string representing a playing card
// the function should return the numerical value of the card
// the first test and first case is written for you
// complete the rest of the tests and cases
// write one test at a time, and make it pass, build your solution up methodically
// just make one change at a time -- don't rush -- programmers are deep and careful thinkers
// function getCardValue(card) {
//     if (card === "A") return 11;
// }//   switch (rank) {
//   case "A":
//      return 11;
//   break;
// }

function getCardValue(card) {
      if (card.slice(0, 2) == '10') {
      return 10;
      }
      let rank = card.length > 2 ? card.slice(0,2) : card[0];
    
      if (rank === 'A') {
      return 11;
      } else if (rank >= 2 && rank <= 9) {
      return parseInt(rank);
      } else if (rank === 'J' || rank === 'Q' || rank === 'K') {
      return 10;
      } else
    //check if not valid
  // const allCards = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];
  // if (!allCards.includes(card))  
  // here i was getting errors when this condition was at the beginning, so instead I implemented if input oes not match then it is invalid
      return "Invalid card rank"
    
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
const fiveofHearts = getCardValue("5♥");
assertEquals(fiveofHearts, 5);
// ====> write your test here, and then add a line to pass the test in the function above

// Handle Face Cards (J, Q, K):
// Given a card with a rank of "10," "J," "Q," or "K",
// When the function is called with such a card,
// Then it should return the value 10, as these cards are worth 10 points each in blackjack.
const tenofSpades = getCardValue("10♥");
assertEquals(tenofSpades, 10);

// Handle Ace (A):
// Given a card with a rank of "A",
// When the function is called with an Ace,
// Then it should, by default, assume the Ace is worth 11 points, which is a common rule in blackjack.
const aceofSpadesS = getCardValue("A");
assertEquals(aceofSpades, 11);

// Handle Invalid Cards:
// Given a card with an invalid rank (neither a number nor a recognized face card),
// When the function is called with such a card,
// // Then it should throw an error indicating "Invalid card rank."
const invalid = getCardValue("c");
assertEquals(invalid, 'Invalid card rank');
