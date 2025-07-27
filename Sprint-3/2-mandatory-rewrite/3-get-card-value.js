function getCardValue(card) {
    let rank;
    if (card.startsWith("10")) {
      rank = "10";
    } else {
      rank = card[0];
    }
    if ((card.length > 3) || (card.length === 3 && !card.startsWith("10")) || (isNaN(rank) && !"AKQJ".includes(rank)) || rank === "0")
    return "Invalid card rank";
    else if (rank === "A") return 11;
    else if (rank === "K" || rank === "Q" || rank === "J" ) return 10;
    else if (Number(rank) >= 2 && Number(rank) <= 10) return Number(rank);
}
module.exports = getCardValue;