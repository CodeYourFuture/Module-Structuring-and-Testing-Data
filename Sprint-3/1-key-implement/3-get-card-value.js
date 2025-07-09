// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// You will need to implement a function getCardValue
// the function takes a single parameter, a string representing a playing card
// the function should return the numerical value of the card
// the first test and first case is written for you
// complete the rest of the tests and cases
// write one test at a time, and make it pass, build your solution up methodically
// just make one change at a time -- don't rush -- programmers are deep and careful thinkers
function getCardValue(card) {
  if (rank === "A") return 11;
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

// ====> write your test here, and then add a line to pass the test in the function above

// Handle Face Cards (J, Q, K):
// Given a card with a rank of "10," "J," "Q," or "K",
// When the function is called with such a card,
// Then it should return the value 10, as these cards are worth 10 points each in blackjack.

// Handle Jack (J):
// Given a card with a rank of "J",
// When the function is called with a Jack,
// Then it should return 10 points, as Jacks are worth 10 points in blackjack.
const jackOfDiamonds = getCardValue("J♦");
assertEquals(jackOfDiamonds, 10);

// Handle Queen (Q):
// Given a card with a rank of "Q",
// When the function is called with a Queen,
// Then it should return 10 points, as Queens are worth 10 points in blackjack.
const queenOfHearts = getCardValue("Q♥");
assertEquals(queenOfHearts, 10);

// Handle King (K):
// Given a card with a rank of "K",
// When the function is called with a King,
// Then it should return 10 points, as Kings are worth 10 points in blackjack.
const kingOfClubs = getCardValue("K♣");
assertEquals(kingOfClubs, 10);

// Handle Number Cards (2-10):
// Given a card with a rank between "2" and "10",
// When the function is called with such a card,
// Then it should return the numeric value corresponding to the rank (e.g., "5" should return 5, "10" should return 10).
const twoOfSpades = getCardValue("2♠");
assertEquals(twoOfSpades, 2);
const threeOfHearts = getCardValue("3♥");
assertEquals(threeOfHearts, 3);
const fourOfDiamonds = getCardValue("4♦");
assertEquals(fourOfDiamonds, 4);
const fiveOfHearts = getCardValue("5♥");
assertEquals(fiveOfHearts, 5);
const sixOfClubs = getCardValue("6♣");
assertEquals(sixOfClubs, 6);
const sevenOfSpades = getCardValue("7♠");
assertEquals(sevenOfSpades, 7);
const eightOfHearts = getCardValue("8♥");
assertEquals(eightOfHearts, 8);
const nineOfDiamonds = getCardValue("9♦");
assertEquals(nineOfDiamonds, 9);

// Handle Invalid Cards:
// Given a card with an invalid rank (neither a number nor a recognized face card),
// When the function is called with such a card,
// Then it should throw an error indicating "Invalid card rank."
function getCardValue(card) {
  const rank = card.slice(0, -1); // Extract the rank part of the card string
  if (rank === "A") return 11; // Ace is worth 11 points
  if (["J", "Q", "K"].includes(rank)) return 10; // Face cards are worth 10 points
  const numericRank = parseInt(rank, 10); // Convert rank to a number
  if (numericRank >= 2 && numericRank <= 10) return numericRank; // Number cards return their value
  throw new Error("Invalid card rank"); // Throw an error for invalid ranks
}

console.log(getCardValue("A♠")); // 11
