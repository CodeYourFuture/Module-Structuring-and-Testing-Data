function getCardValue(card) {
    last = card.lastIndexOf();
    rank = card.slice(0, last);
    if (rank === "A") return 11;
    else if (rank >= 2 && rank <= 9) return parseInt(rank);
    else if (["10", "K", "J", "Q"].includes(rank)) return parseInt(10);
    else return "Invalid card";
}
module.exports = getCardValue;