function getCardValue(card) {
    if (card === "A") return 11; // Assuming "A" represents Ace
    return parseInt(card, 10) || 0; // Convert card to number or return 0 if invalid
}

module.exports = getCardValue;

