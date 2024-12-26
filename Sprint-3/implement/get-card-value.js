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

module.exports = getCardValue

function getCardValue(card) {
   const singleDigitRank = Number(card.substring(0,1)); // return the first value of string
   const doubleDigitRank = Number(card.substring(0,2));
   const lastCh = card.charAt(card.length - 1)
   const validRanks = ["K", "J", "Q",]
   const validSuits = ["♠", "♥", "♦", "♣"]
   console.log(`single dig is ${singleDigitRank}`);
   console.log(`last character is ${lastCh}`);

//checks if length is valid
        if (card.length > 3){
           return "Invalid Cards"
        }else if (card.startsWith("10") && card.length === 3 && validSuits.includes(card[2])){
            return 10;
//checks for 2 t0 9 of any valid suit e.g 2♥
        } else if (singleDigitRank >= 2 && singleDigitRank <=9 && card.length === 2 && validSuits.includes(card[1])){
            return singleDigitRank;
//checks to pass k♠ but not kk♠
        } else if (validRanks.includes(card[0]) && validSuits.includes(card[1]) && card.length === 2) {
            return 10;
        } else if (card.startsWith("A") && validSuits.includes(card[1]) && card.length === 2){
            return 11
        } else return "Invalid Cards";
        
}    
//console.log(getCardValue("J♠"));
console.log(getCardValue("A♠"));


/*getCardValue("99Q♠");
getCardValue("100♠");
getCardValue("2K♠");
getCardValue("KK♠");
getCardValue("AA♠")*/