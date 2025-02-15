function getCardValue(card) {
    // replace with your code from key-implement
    let rank = card.slice(0, -1);
    if (rank === "A") return 11;
    if(rank === "K") return 10;
    if ( rank === "Q") return 10;
    if (rank === "J") return 10;
    if (rank > 1 && rank <= 10)return Number(rank)
      else return "Invalid card rank."
}
module.exports = getCardValue;