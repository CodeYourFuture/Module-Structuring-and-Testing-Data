function getCardValue(card) {
  const rank = card[0];
  if (rank === "A") return 11;
  if (rank >= "2" && rank <= "9") return parseInt(rank);
  if (rank === "K" || rank === "Q" || rank === "J" || rank === 10) return 10;
  throw new Error("invalid card rank");
}
module.exports = getCardValue;
