function getCardValue(card) {
    // replace with your code from key-implement
    const rank = card.slice(0, -1);
    if (rank === "A") return 11;
    if (!isNaN(rank) && Number(rank) >= 2 && Number(rank) <= 10) return Number(rank);
    if (["J", "Q", "K"].includes(rank)) return 10;
  throw new Error("Invalid card rank");

}
module.exports = getCardValue;