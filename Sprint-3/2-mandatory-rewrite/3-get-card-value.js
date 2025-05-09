function getCardValue(card) {
    // replace with your code from key-implement
    return 11;

}
const rank = card.slice(0, -1);
    if (rank === "A") return 11;
     (["K", "Q", "J", "10"].includes(rank)) return 10;
     (!isNaN(rank) && rank >= 2 && rank <= 9) return Number(rank);
    throw new Error("Invalid card rank");
  
module.exports = getCardValue;