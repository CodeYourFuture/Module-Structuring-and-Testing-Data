function getCardValue(card) {
    // Case 2: Handle Number Cards (2-10)
    if (card.length === 2 && !isNaN(card[0])) {
        return parseInt(card[0]);
    }

    // Case 3: Handle Face Cards (J, Q, K)
    if (card === "J" || card === "Q" || card === "K") {
        return 10;
    }

    // Case 4: Handle Ace (A)
    if (card === "A") {
        return 11;
    }

    // Case 5: Handle Invalid Cards
    return null; // Invalid card returns null
}

module.exports = getCardValue;

