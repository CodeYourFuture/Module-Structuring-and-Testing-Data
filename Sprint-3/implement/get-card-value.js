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

//The string input must consist of 2 characters if the emoji suit is to be included
    if (typeof card !="string" || card.length < 2) {
        throw new Error("Invalid card rank or card suit");
    }

//The input has to be separated into the rank and suit emoji so that they can be handled separately
let rank = card.slice(0, -1); //If there are 2 characters in the string, this slices just the first character
let suit = card.slice(-1); //This isolates the suit emoji

//Define valid suits and face cards
let validSuits = ["♠", "♥", "♦", "♣"]; 
let validFaceCards = ["J", "Q", "K", "A"];

//Instructing the only suit emojis that are valid. When the condition is true (the suit input is NOT in the valid array) it throws an error.
    
    if (!validSuits.includes(suit)) {
        throw new Error("Invalid card rank or card suit");
    }
 
//Handling when card inputs are 2-10
    if (!isNaN(rank) && rank.length<=2 && Number(rank) >= "2" && Number(rank) <= "10") {
        return parseInt(rank, 10); //parseInt parses a string and returns the first integer, 10 indicates decimal radix for numbers 0-9
    }    

//Handling face cards worth 10 and the Ace worth 11
    if (validFaceCards.includes(rank)) {
        if (rank === "A") {
            return 11;
        }
        return 10; //When not the A but the other face cards J, Q, K
    }

//If none of the valid rank parameters are matched, throw an error
        throw new Error("Invalid card rank or card suit");
    
}    

module.exports = {getCardValue};
    



