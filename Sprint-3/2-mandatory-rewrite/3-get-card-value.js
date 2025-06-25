function getCardValue(card) {
  let rank = card[0];
  if (rank === "A") return 11;
  if (rank === "J" || rank === "Q" || rank === "K") return 10;
  if (Number(card[0]) > 0 && Number(card[0]) < 11) return Number(card[0]);
  return "Invalid card rank.";
}
module.exports = getCardValue;
