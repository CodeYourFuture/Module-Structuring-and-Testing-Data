function getCardValue(card) {
  rank = card.slice(0, -1);
  if (rank === "A") return 11;
  else if (rank === "J" || rank === "Q" || rank === "K") return 10;
  else if (
    typeof Number(rank) == "number" &&
    Number(rank) > 1 &&
    Number(rank) < 10
  )
    return Number(rank);
  else return "Invalid card rank.";
}

module.exports = getCardValue;
