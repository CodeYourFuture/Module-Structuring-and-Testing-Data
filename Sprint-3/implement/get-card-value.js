function getCardValue(card) {
    if (!card || card.length < 2) {
        throw new Error("Invalid card format");
    }
    const rank = card.slice(0, -1);
    const suit = card.slice(-1);
    const faceCardValues = { J: 10, Q: 10, K: 10, A: 11 };
    if (!isNaN(rank)) {
        const value =  parseInt(rank, 10);
        if (value >= 2 && value <= 10) {
            return value;
        } else {
            throw new Error("Invalid card rank");
        }
    }
    if (faceCardValues[rank] !== undefined) {
        return faceCardValues[rank];
    }
    throw new Error("Invalid card rank");
}

try {
    console.assert(getCardValue("2♠") === 2, "Failed: Expected value for '2♠' is 2");
    console.assert(getCardValue("9♥") === 9, "Failed: Expected value for '9♥' is 9");
    console.assert(getCardValue("10♦") === 10, "Failed: Expected value for '10♦' is 10");
    console.assert(getCardValue("J♣") === 10, "Failed: Expected value for 'J♣' is 10");
    console.assert(getCardValue("Q♠") === 10, "Failed: Expected value for 'Q♠' is 10");
    console.assert(getCardValue("K♥") === 10, "Failed: Expected value for 'K♥' is 10");
    console.assert(getCardValue("A♦") === 11, "Failed: Expected value for 'A♦' is 11");

    try {
        getCardValue("1♠");
        console.assert(false, "Failed: '1♠' should throw an error for invalid rank");
    } catch (e) {
        console.assert(e.message === "Invalid card rank", `Failed: Expected 'Invalid card rank' for '1♠', but got '${e.message}'`);
    }

    try {
        getCardValue("Z♣");
        console.assert(false, "Failed: 'Z♣' should throw an error for invalid rank");
    } catch (e) {
        console.assert(e.message === "Invalid card rank", `Failed: Expected 'Invalid card rank' for 'Z♣', but got '${e.message}'`);
    }

    try {
        getCardValue("♣");
        console.assert(false, "Failed: '♣' should throw an error for invalid format");
    } catch (e) {
        console.assert(e.message === "Invalid card format", `Failed: Expected 'Invalid card format' for '♣', but got '${e.message}'`);
    }

    console.log("All test cases passed!");
} catch (error) {
    console.error(error.message);
}

module.exports = { getCardValue };

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
