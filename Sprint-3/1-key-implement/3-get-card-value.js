// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// You will need to implement a function getCardValue
// the function takes a single parameter, a string representing a playing card
// the function should return the numerical value of the card
// the first test and first case is written for you
// complete the rest of the tests and cases
// write one test at a time, and make it pass, build your solution up methodically
// just make one change at a time -- don't rush -- programmers are deep and careful thinkers
function getCardValue(card) {
  // use an array to hold the values of the face cards.
  const faceCards = ["10", "J", "Q", "K"];

  /*
  use slice to extract the rank (the numeric or face card value) from the "card" value. Start at the beginning index of the string (0) and go up to but not including the last character (-1 means one from the end)
  */
  const rank = card.slice(0, -1);

  if (rank === "A") return 11; //handles Ace cards
  if (rank >= 2 && rank < 10) return Number(rank); //handles cards 2-9

  // use the includes() method to check if the value of the variable rank is one of the faceCards array values.
  if (faceCards.includes(rank)) return 10; //handles face cards

  // use the built-in JS Error() object to throw an error with a message if the value of "card" is invalid (with the message as the argument)
  throw new Error("invalid card rank"); //handles all invalid "card" values
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

// Handle Face Cards (J, Q, K):
// Given a card with a rank of "10," "J," "Q," or "K",
// When the function is called with such a card,
// Then it should return the value 10, as these cards are worth 10 points each in blackjack.

const jackofClubs = getCardValue("J♣");
assertEquals(jackofClubs, 10);

// Handle Ace (A):
// Given a card with a rank of "A",
// When the function is called with an Ace,
// Then it should, by default, assume the Ace is worth 11 points, which is a common rule in blackjack.
const aceCard = getCardValue("A♦");
assertEquals(aceCard, 11);

// Handle Invalid Cards:
// Given a card with an invalid rank (neither a number nor a recognized face card),
// When the function is called with such a card,
// Then it should throw an error indicating "Invalid card rank."
const invalidCards = [
  ["G♥", "invalid card rank"], // random rank letter
  ["1♠", "invalid card rank"], // 1 is not a valid card
  ["11♦", "invalid card rank"], // 11 is not a valid card
  ["62♣", "invalid card rank"], //random rank number
  ["", "invalid card rank"], //empty string
  ["NaN♠", "invalid card rank"], //NaN as rank
  ["undefined♣", "invalid card rank"], //undefined as rank
  ["null♦", "invalid card rank"], // null as rank
];

/*
 use a try block to call the getCardValue function, if it does not throw an error it checks the returned value against the expeced result. However if the function does throw an error it catches the error and checks if the error message matches "invalid card rank". In the catch block, the error.message argument in the assertEquals() function refers to Error("invalid card rank") object in the getCardValue() function at the top of the code
 */
for (const [input, expected] of invalidCards) {
  try {
    const result = getCardValue(input);
    assertEquals(result, expected);
  } catch (error) {
    assertEquals(error.message, expected);
  }
}
