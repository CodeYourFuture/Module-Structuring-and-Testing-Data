function getCardValue(card) {
    // replace with your code from key-implement
  const rank = card.slice(0, -1); // all characters except last
    if (rank === "A") return 11;
    if (rank >= '2' && rank <= '9') return Number(rank);
    if (rank === "10" || rank === "J" || rank === "Q" || rank === "K") return 10;
    throw new Error("Invalid card rank.");
}
module.exports = getCardValue;