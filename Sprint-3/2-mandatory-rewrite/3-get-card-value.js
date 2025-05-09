function getCardValue(card) {
  const validRanks = ["J", "Q", "K", "A"];

  let rank = card.slice(0, -1);

  if (!isNaN(rank) && rank >= 2 && rank <= 10) {
    return parseInt(rank);
  }

  if (validRanks.includes(rank)) {
    if (rank === "A") return 11;
    return 10;
  }

  throw new Error("Invalid card rank");
}

module.exports = getCardValue;
