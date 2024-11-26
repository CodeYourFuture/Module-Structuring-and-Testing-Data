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
_______________________________SOLUTION_____________________________________________

function getCardValue(card) {
    // Extract the rank by removing the last character (suit emoji)
    const rank = card.slice(0, -1);
    
    // Handle numeric cards (2-10)
    if (!isNaN(rank)) {
        const numericValue = parseInt(rank, 10);
        if (numericValue >= 2 && numericValue <= 10) {
            return numericValue;
        }
    }
    
    // Handle face cards and Ace
    switch (rank) {
        case 'J':
        case 'Q':
        case 'K':
        case '10':
            return 10;
        case 'A':
            return 11;
        default:
            throw new Error("Invalid card rank");
    }
}

// Assertions to test the function with different cases
console.assert(getCardValue("5♠") === 5, "Test Case 1 Failed");         // Numeric card 5
console.assert(getCardValue("10♣") === 10, "Test Case 2 Failed");       // Numeric card 10
console.assert(getCardValue("J♦") === 10, "Test Case 3 Failed");        // Face card Jack
console.assert(getCardValue("Q♠") === 10, "Test Case 4 Failed");        // Face card Queen
console.assert(getCardValue("K♣") === 10, "Test Case 5 Failed");        // Face card King
console.assert(getCardValue("A♦") === 11, "Test Case 6 Failed");        // Ace
try {
    getCardValue("1♠");  // Invalid card
    console.assert(false, "Test Case 7 Failed - Expected error for invalid card rank");
} catch (e) {
    console.assert(e.message === "Invalid card rank", "Test Case 7 Passed");
}

/*
Explanation:
Extracting Rank: We take the rank by slicing off the last character, assuming it's the suit.
Numeric Cards (2-10): If rank is a number between 2 and 10, it returns the corresponding numeric value.
Face Cards (J, Q, K): Face cards are worth 10 points.
Ace (A): By default, A returns a value of 11.
Invalid Cards: If the rank is unrecognized, the function throws an error.
*/