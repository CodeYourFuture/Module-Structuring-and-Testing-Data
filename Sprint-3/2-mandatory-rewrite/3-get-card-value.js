function getCardValue(card) {
  const rank = card.slice(0, -1);
  if (rank === "A") {
    return 11;
  }
  if (rank === "K" || rank === "Q" || rank === "J" || rank === "10") {
    return 10;
  }
  const value = parseInt(rank, 10);
  if (value >= 2 && value <= 9) {
    return value;
  }
  throw new Error("Invalid card rank.");
}
module.exports = getCardValue;
