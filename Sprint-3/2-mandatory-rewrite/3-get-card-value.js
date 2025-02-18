function getCardValue(card) {
    // replace with your code from key-implement
    let rank = card.slice(0, -1);
    if (rank === "A") return 11;
    else if (["J", "K", "Q", "10"].includes(rank)) return 10;
    else if (["2", "3", "4", "5", "6", "7", "8", "9"].includes(rank))
      return Number(rank);
    else return "Invalid card rank";
}
module.exports = getCardValue;