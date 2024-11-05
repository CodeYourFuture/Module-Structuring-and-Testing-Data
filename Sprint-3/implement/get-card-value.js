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
    // Extract the rank from the card string (all characters except the last)
    let rank = card.slice(0, -1);

    // Handle number cards (2-10)
    if (!isNaN(rank) && Number(rank) >= 2 && Number(rank) <= 10) {
        return Number(rank);
    }
    // Handle face cards (J, Q, K)
    else if (rank === "J" || rank === "Q" || rank === "K" || rank === "10") {
        return 10;
    }
    // Handle Ace (A)
    else if (rank === "A") {
        return 11;
    }
    // Handle invalid card ranks
    else {
        throw new Error("Invalid card rank");
    }
}

// Test cases using console.assert
console.assert(getCardValue("2♠") === 2, "2♠ should return 2");
console.assert(getCardValue("5♣") === 5, "5♣ should return 5");
console.assert(getCardValue("10♦") === 10, "10♦ should return 10");
console.assert(getCardValue("J♥") === 10, "J♥ should return 10");
console.assert(getCardValue("Q♠") === 10, "Q♠ should return 10");
console.assert(getCardValue("K♣") === 10, "K♣ should return 10");
console.assert(getCardValue("A♦") === 11, "A♦ should return 11");
