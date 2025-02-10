function getCardValue(card) {
  const rank = card.slice(0, -1);
  if (rank === "A") return 11;
  if (rank === "J" || rank === "Q" || rank === "K") return 10;
  const num = Number(rank);
  if (num > 1 && num < 11) return num;
  return "Invalid card rank.";
}
module.exports = getCardValue;
