// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// You will need to implement a function getCardValue

// You need to write assertions for your function to check it works in different cases

// Acceptance criteria:

// Given a card string in the format "A♠" (representing a card in blackjack - the last character will always be an emoji for a suit, and all characters before will be a number 2-10, or one letter of J, Q, K, A),
// When the function getCardValue is called with this card string as input,
// Then it should return the numerical card value

// Handle Number Cards (2-10):
// Given a card with a rank between "2" and "9",
// When the function is called with such a card,
// Then it should return the numeric value corresponding to the rank (e.g., "5" should return 5).

// Handle Face Cards (J, Q, K):
// Given a card with a rank of "10," "J," "Q," or "K",
// When the function is called with such a card,
// Then it should return the value 10, as these cards are worth 10 points each in blackjack.

// Handle Ace (A):
// Given a card with a rank of "A",
// When the function is called with an Ace,
// Then it should, by default, assume the Ace is worth 11 points, which is a common rule in blackjack.

// Handle Invalid Cards:
// Given a card with an invalid rank (neither a number nor a recognized face card),
// When the function is called with such a card,
// Then it should throw an error indicating "Invalid card rank."

function getCardValue(card) {
  const rank = card.slice(0, -1);

  if (rank >= "2" && rank <= "9") {
    return parseInt(rank, 10);
  }

  if (rank === "10" || rank === "J" || rank === "Q" || rank === "K") {
    return 10;
  }

  if (rank === "A") {
    return 11;
  }

  throw new Error("Invalid card rank.");
}

// Assertions to test the function
console.assert(getCardValue("5♠") === 5, "Test case 1 failed");
console.assert(getCardValue("10♣") === 10, "Test case 2 failed");
console.assert(getCardValue("J♦") === 10, "Test case 3 failed");
console.assert(getCardValue("Q♥") === 10, "Test case 4 failed");
console.assert(getCardValue("K♠") === 10, "Test case 5 failed");
console.assert(getCardValue("A♣") === 11, "Test case 6 failed");
console.assert(getCardValue("2♦") === 2, "Test case 7 failed");
console.assert(getCardValue("3♥") === 3, "Test case 8 failed");

// Invalid card test case
// Invalid card test case
try {
  getCardValue("Z♠");
  console.log("Test case 9 failed: No error thrown for invalid card");
} catch (e) {
  if (e.message === "Invalid card rank.") {
    console.log("Test case 9 passed with error:", e.message);
  } else {
    console.log("Test case 9 failed with unexpected error:", e.message);
  }
}
