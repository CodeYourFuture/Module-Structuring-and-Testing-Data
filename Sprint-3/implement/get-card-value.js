// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// You will need to implement a function getCardValue

function getCardValue(card) {
  let rank = card.slice(0, -1);

  if (rank === "A") return 11;
  if (rank === "J" || rank === "Q" || rank === "K" || rank === "10") return 10;
  rank = Number(rank);

  if (rank < 2 || rank > 10 || isNaN(rank)) {
    throw new Error("Invalid card rank.");
  }
  return rank;
}

// You need to write assertions for your function to check it works in different cases

// Acceptance criteria:
// 🧪 Let's test each stated criterion

// Given a card string in the format "A♠" (representing a card in blackjack - the last character will always be an emoji for a suit, and all characters before will be a number 2-10, or one letter of J, Q, K, A),
// When the function getCardValue is called with this card string as input,
// Then it should return the numerical card value

// Here's my test function to make this easier for me to read and follow
// Jest is just a library of functions like this, given easy to remember names, to make your testing clearer
// There are many good libraries like this; Jest is the most common one

function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

const aceofSpades = getCardValue("A♠");
assertEquals(aceofSpades, 11);
// Handle Number Cards (2-10):
// Given a card with a rank between "2" and "9",
// When the function is called with such a card,
// Then it should return the numeric value corresponding to the rank (e.g., "5" should return 5).
const fiveofHearts = getCardValue("5♥");
assertEquals(fiveofHearts, 5);

try {
  const fiveofHearts = getCardValue("5♥");
  console.assert(fiveofHearts === 5, `Expected 5 for 5♥, got: ${fiveofHearts}`);
} catch (error) {
  console.error(error.message);
}

// Handle Face Cards (J, Q, K):
// Given a card with a rank of "10," "J," "Q," or "K",
// When the function is called with such a card,
// Then it should return the value 10, as these cards are worth 10 points each in blackjack.
const queenofClubs = getCardValue("Q♣");
assertEquals(queenofClubs, 10);

try {
  const queenofClubs = getCardValue("Q♣");
  console.assert(
    queenofClubs === 10,
    `Expected 10 for Q♣, got: ${queenofClubs}`
  );
} catch (error) {
  console.error(error.message);
}

try {
  const tenofDiamonds = getCardValue("10♦");
  console.assert(
    tenofDiamonds === 10,
    `Expected 10 for 10♦, got: ${tenofDiamonds}`
  );
} catch (error) {
  console.error(error.message);
}

// Handle Ace (A):
// Given a card with a rank of "A",
// When the function is called with an Ace,
// Then it should, by default, assume the Ace is worth 11 points, which is a common rule in blackjack.
const aceofClubs = getCardValue("A♣");
assertEquals(aceofClubs, 11);

try {
  const aceofClubs = getCardValue("A♣");
  console.assert(aceofClubs === 11, `Expected 11 for A♣, got: ${aceofClubs}`);
} catch (error) {
  console.error(error.message);
}

// Handle Invalid Cards:
// Given a card with an invalid rank (neither a number nor a recognized face card),
// When the function is called with such a card,
// Then it should throw an error indicating "Invalid card rank."
const invalidCard = "X♦";
try {
  getCardValue(invalidCard);
} catch (error) {
  console.log(error.message);
}
// Simply returning a message would have been fine
// But the task specifically asked for an error to be thrown
// So here's a way to do that
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw

// My questions
// What about the suit? In our function we are only looking at the rank of the card.
// Should we also consider the suit? Does this matter in blackjack?
// What about the joker? Should we consider the joker as a valid card?
// Is this error handling message clear or is the negative test confusing?
