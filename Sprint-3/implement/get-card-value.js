// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// You will need to implement a function getCardValue
function getCardValue(card){
    let rank = card.slice(0, -1);   //extracting rank of the card (without symbol)
    // convert strings into integers with parseInt method and then compare the value for Number Cards
    if (parseInt(rank) >= 2 && parseInt(rank) <= 10) {
        return `${rank}`;
    }
    // Check for the face Cards
    if (rank === "J" || rank === "Q" || rank === "K" ) {
        return "10";
    }
    // Check for the Ace Card
    if (rank === "A"){
        return "11";
    }
    // Check for invalid Cards
    else
       return "Invalid card rank";
  }

console.log(getCardValue("K♠"));  // 10
console.log(getCardValue("A♠"));  // 11
console.log(getCardValue("7♥"));  // 7
console.log(getCardValue("10♦"));  // 10


console.assert(getCardValue("K♠") === "10", "Test failed for 'K♠'")
console.assert(getCardValue("A♠") === "11", "Test failed for 'A♠'")
console.assert(getCardValue("7♥") === "7", "Test failed for '7♥'")
console.assert(getCardValue("10♦") === "10", "Test failed for '10♦'")
console.assert(getCardValue("AA♠") === "Invalid card rank", "Test failed for 'AA♠'")
console.assert(getCardValue("25Q♠")=== "Invalid card rank", "Test failed for '25Q♠'");
console.assert(getCardValue("1♦")=== "Invalid card rank", "Test failed for '1♦'");
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
module.exports = getCardValue;