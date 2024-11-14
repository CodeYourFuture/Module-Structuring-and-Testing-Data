// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck
// You will need to implement a function getCardValue
// You need to write assertions for your function to check it works in different cases
// Acceptance criteria:
// Given a card string in the format "A♠" (representing a card in blackjack - the last character will always be an emoji
// for a suit, and all characters before will be a number 2-10, or one letter of J, Q, K, A),

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
    const cardRank = card[0]; // The first character represents the rank of the card

    // If the card is a number between 2 and 9
    if (cardRank >= '2' && cardRank <= '9') {
        return parseInt(cardRank);
    } else if (cardRank === '1' && card[1] === '0') { // Card 10
        return 10;
    }
    // Face cards J, Q, K
    else if (cardRank === 'J' || cardRank === 'Q' || cardRank === 'K') {
        return 10;
    }
    // Ace card A
    else if (cardRank === 'A') {
        return 11;
    }
    // Invalid card
    else {
        throw new Error("Invalid card rank");
    }
}

module.exports = getCardValue;



if (require.main === module) {
    try {
        console.log(getCardValue("5") === 5 ? "Pass" : "Fail"); // Numeric card 5
        console.log(getCardValue("9") === 9 ? "Pass" : "Fail"); // Numeric card 9
        console.log(getCardValue("10") === 10 ? "Pass" : "Fail"); // Card 10
        console.log(getCardValue("J") === 10 ? "Pass" : "Fail"); // Face card J
        console.log(getCardValue("Q") === 10 ? "Pass" : "Fail"); // Face card Q
        console.log(getCardValue("K") === 10 ? "Pass" : "Fail"); // Face card K
        console.log(getCardValue("A") === 11 ? "Pass" : "Fail"); // Ace card A
        console.log(getCardValue("X") === "Invalid card rank" ? "Fail" : "Pass"); // Invalid card
    } catch (error) {
        if (error.message === "Invalid card rank") {
            console.log("Pass");
        } else {
            console.log("Fail");
        }
    }
}