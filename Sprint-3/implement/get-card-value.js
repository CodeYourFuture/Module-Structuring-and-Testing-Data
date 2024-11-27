// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// You will need to implement a function getCardValue

// You need to write assertions for your function to check it works in different cases

function getCardValue(card) {
    // Check if the card is a number between 2 and 9
    if (Number(card[0]) >= 2 && Number(card[0]) <= 9) {
        return Number(card[0]);
    }
    // Check if the card is "10" or a face card (J, Q, K)
    else if (card.slice(0,2) === "10" || card[0] === "J" || card[0] === "Q" || card[0] === "K" ) {
        return 10;
    }
    // Check if the card is an Ace (A)
    else if (card[0] === "A") {
        return 11;
    }
    // Handle invalid card input
    else {
        throw new Error("Invalid card rank");
    }

}

// Example assertions to test the function
try {
    console.assert(getCardValue("3♠") === 3, "Test failed for '3♠'");
    console.assert(getCardValue("7♠") === 7, "Test failed for '7♠'");
    console.assert(getCardValue("10♠") === 10, "Test failed for '10♠'");
    console.assert(getCardValue("J♥") === 10, "Test failed for 'J♥'");
    console.assert(getCardValue("Q♣") === 10, "Test failed for 'Q♣'");
    console.assert(getCardValue("K♦") === 10, "Test failed for 'K♦'");
    console.assert(getCardValue("A♠") === 11, "Test failed for 'A♠'");
    console.log("All tests passed!");
} catch (error) {
    console.error(error.message);
}

console.log(getCardValue("A♠"));
console.log(getCardValue("7♥"));
console.log(getCardValue("10♦"));
console.log(getCardValue("1♦"));

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