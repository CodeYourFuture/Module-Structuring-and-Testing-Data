function getCardValue(card) {
    // Extract the rank (everything except the last character, which is the suit)
    const rank = card.slice(0, -1); 
    const validNumbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10"];
    const faceCards = ["J", "Q", "K"];

    // Case 1: Handle Number Cards (2-10)
    if (validNumbers.includes(rank)) {
        return parseInt(rank);
    }

    // Case 2: Handle Face Cards (J, Q, K)
    if (faceCards.includes(rank)) {
        return 10;
    }

    // Case 3: Handle Ace (A)
    if (rank === "A") {
        return 11;
    }

    // Case 4: Handle Invalid Cards
    return null; // Return null for invalid card ranks
}

module.exports = getCardValue;


