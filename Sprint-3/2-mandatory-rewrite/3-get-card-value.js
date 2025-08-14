function getCardValue(card) {
  if (card.length == 3 && Number(card[0]) == 1 && Number(card[1]) == 0) return 10;
  if (card.length > 2) return "Invalid card rank."
  let rank = card[0];
  if (rank === "A") return 11;
  if (rank === "J" || rank === "Q" || rank === "K") return 10;
  if (Number(card[0]) > 0 && Number(card[0]) < 10) return Number(card[0]);
  return "Invalid card rank.";
}
module.exports = getCardValue;
