function getCardValue(card) {
    rank = card[0]
    if ((card.length > 3) || (card.length === 3 && !(card[0] === "1" && card[1] === "0" && isNaN(card[2]))))
    return "Invalid card rank";
    else if (rank === "A") return 11;
    else if (rank === "K" || rank === "Q" || rank === "J" ) return 10;
    else if (Number(rank) >= 2 && Number(rank) <= 10) return Number(rank);
}
module.exports = getCardValue;