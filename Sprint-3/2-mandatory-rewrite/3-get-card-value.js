function getCardValue(card) {
  let rank = card.slice(0, -1);
  if (rank === "A") return 11;
  if (rank === "K" || rank === "Q" || rank === "J" || rank === "10") return 10;
  if (Number(rank) >= 2 && Number(rank) <= 9 && rank.length === 1)
    return Number(rank);
  throw Error("Invalid card rank");
}
module.exports = getCardValue;
