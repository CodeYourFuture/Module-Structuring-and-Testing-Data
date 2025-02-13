function getCardValue(card) {
    let rank = card.slice(0, -1);
    if (rank === "A") return 11;
    else if (rank>="2" && rank<="9") return Number(rank);
    else if (rank==="10" || rank==="J" || rank==="Q" || rank==="K") return 10;
    else return "Invalid card rank";
}
module.exports = getCardValue;