function getCardValue(card) {
    let rank = card.slice(0, card.length-1)
    if (rank === "A") return 11;
    if (rank === "K" || rank === "Q" || rank === "J") return 10;
    rank = parseInt(rank)
    if (rank === 10) return 10;
    if (rank > 1 && rank < 10) return rank;
    return "Invalid input" 
}
module.exports = getCardValue;