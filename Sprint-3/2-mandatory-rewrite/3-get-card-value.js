function getCardValue(card) {
  // replace with your code from key-implement
  let rank = card.slice(0, -1);

  if (rank === "A") return 11;
  else if (rank === "K" || rank === "Q" || rank === "J" || rank === "10")
    return 10;
  else if (Number(rank) >= 2 && Number(rank) <= 9) return Number(rank);
  else return "Invalid card rank.";
}
module.exports = getCardValue;
