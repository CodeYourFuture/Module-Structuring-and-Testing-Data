function getCardValue(card) {
  const rank = card.slice(0, -1);
  if (Number(rank) <= 10 && Number(rank) >= 2) {
    return Number(rank);
  } else if (rank === "A") {
    return 11;
  } else if (rank === "Q" || rank === "K" || rank === "J") {
    return 10;
  } else {
    throw new Error("Invalid card rank");
  }
}
module.exports = getCardValue;
