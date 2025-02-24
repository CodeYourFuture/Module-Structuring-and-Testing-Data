function getCardValue(card) {
    let rank = card.slice(0, -1); // Extract the rank by removing the suit
    if (rank === "A") return 11;
    else if (rank >= 2 && rank <= 9) return Number(rank);
    else if (["K", "Q", "J", "10"].includes(rank)) return 10;
    else return "Invalid Card Rank";
}

module.exports = getCardValue;