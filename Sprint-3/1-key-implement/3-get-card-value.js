// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// You will need to implement a function getCardValue
// the function takes a single parameter, a string representing a playing card
// the function should return the numerical value of the card
// the first test and first case is written for you
// complete the rest of the tests and cases
// write one test at a time, and make it pass, build your solution up methodically
// just make one change at a time -- don't rush -- programmers are deep and careful thinkers
function getCardValue(card) {
  const rank = card.slice(0, -1);
  if (rank === "A") return 11;
  if (rank === "2") return 2;
  if (rank === "3") return 3;
  if (rank === "4") return 4;
  if (rank === "5") return 5;
  if (rank === "6") return 6;
  if (rank === "7") return 7;
  if (rank === "8") return 8;
  if (rank === "9") return 9;
  if(["10", "J", "Q", "K"].includes(rank)) return 10;
  throw new Error("Invaild card rank")
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
const aceOfSpades = getCardValue("A♠");
assertEquals(aceOfSpades, 11);

// Handle Number Cards (2-10):
// Given a card with a rank between "2" and "9",
// When the function is called with such a card,
// Then it should return the numeric value corresponding to the rank (e.g., "5" should return 5).
const fiveOfHearts = getCardValue("5♥");
// ====> write your test here, and then add a line to pass the test in the function above
assertEquals(fiveOfHearts, 5);
// Handle Face Cards (J, Q, K):
// Given a card with a rank of "10," "J," "Q," or "K",
// When the function is called with such a card,
// Then it should return the value 10, as these cards are worth 10 points each in blackjack.
const jackOfSpades = getCardValue("J♠");
assertEquals(jackOfSpades, 10);
// Handle Ace (A):
// Given a card with a rank of "A",
// When the function is called with an Ace,
// Then it should, by default, assume the Ace is worth 11 points, which is a common rule in blackjack.


// Handle Invalid Cards:
// Given a card with an invalid rank (neither a number or a recognized face card),
// When the function is called with such a card,
// Then it should throw an error indicating "Invalid card rank."
try {
  const invaildCard = getCardValue("222");
  assertEquals(invaildCard, "Invalid card rank");
  }
  catch (error) {
    assertEquals(error.message, "Invaild card rank");
    
  }



