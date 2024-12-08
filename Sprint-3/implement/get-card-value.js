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

     // Extract the rank part of the card (the first part, excluding the suit)
     const rank = card.slice(0, -1); // Removing the last character e.g "A♠" =>"A" etc.

     // Handle number cards (2-10)
    if (rank >= "2" && rank <= "9") {
        return parseInt(rank); //  converts a string into an integer. "2" => 2
    }

    // Handle face cards (J, Q, K)
     else if (rank === "J" || rank === "Q" || rank === "K" || rank === "10") {
         return 10;
     }

     // Handle Ace (A)
    else if (rank === "A") {
        return 11;
   } else { 
        throw new Error("Invalid card rank"); 
   }

 }

console.assert(getCardValue("J♠") === 10, 'Test Case 1 Failed: Expected 10');
console.assert(getCardValue("9♠") === 9, 'Test Case 2 Failed: Expected 9');
console.assert(getCardValue("10♠") === 10, 'Test Case 3 Failed: Expected 10');
console.assert(getCardValue("A♠") === 11, 'Test Case 4 Failed: Expected 11');
console.assert(getCardValue("K♠") === 10, 'Test Case 5 Failed: Expected 10');

try {
    getCardValue("1♠");  
    console.assert(false, 'Test Case 6 Failed: Expected error for invalid rank');
} catch (e) {
    console.log("Test Case 6 Passed: Error thrown as expected");
}


console.log(getCardValue("J♠"))
console.log(getCardValue("9♠"))
console.log(getCardValue("1♠"))
console.log(getCardValue("A♠"))



module.exports = getCardValue
