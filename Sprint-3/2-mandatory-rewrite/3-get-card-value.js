function getCardValue(card) {
    if (!card || card.length < 2) {
        throw new Error("Invalid card rank.");
    }
    
    const rank = card.slice(0, -1);
    if (rank === "A") return 11;
    if (rank === "J" || rank === "Q" || rank === "K" || rank === "10") return 10;
    if (!isNaN(rank) && Number(rank) >= 2 && Number(rank) <= 9) return Number(rank);
    throw new Error("Invalid card rank.");
}

module.exports = getCardValue;
