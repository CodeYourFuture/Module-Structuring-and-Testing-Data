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

function getCardValue(_card) {
    // Remove the suit (emoji) from the card string
    _card = _card.slice(0, -1);
    
    // Check if the card rank is valid (2-10, J, Q, K, A)
    if (!/^(10|[2-9]|[JQKA])$/.test(_card)) {
        throw new Error("Invalid card rank"); // Throw an error for invalid card ranks
    }
    
    // Convert card to a number if it's between 2 and 9
    if (_card >= 2 && _card <= 9) {
        return Number(_card); // Return numeric value for ranks 2-9
    } else if (_card === 'A') {
        return 11; // Ace is worth 11
    } else if (_card === 'J' || _card === 'Q' || _card === 'K' || _card === '10') {
        return 10; // Face cards and 10 are worth 10
    }

    // This return is not needed, as the function will throw on invalid ranks
    return "Invalid card rank"; 
}

// Assertions for valid inputs
console.assert(getCardValue("A♠") === 11, "Should display 11");
console.assert(getCardValue("10♣") === 10, "Should display 10");
console.assert(getCardValue("9♠") === 9, "Should display 9");

// Assertions for invalid inputs (Expecting errors)
try {
    getCardValue("12♦");
} catch (e) {
    console.assert(e.message === "Invalid card rank", "Should throw 'Invalid card rank' error");
}

try {
    getCardValue("hello");
} catch (e) {
    console.assert(e.message === "Invalid card rank", "Should throw 'Invalid card rank' error");
}