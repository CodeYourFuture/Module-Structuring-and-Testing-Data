function getCardValue(card) {
  let rank = card.slice(0, card.length - 1);
  let numRank = parseInt(rank);
  if (rank === "A") return 11;
  if (rank === "K" || rank === "j" || rank === "Q") return 10;
  if (numRank > 1 && numRank < 10) return numRank;
  else return "invalid card rank";
}
module.exports = getCardValue;
