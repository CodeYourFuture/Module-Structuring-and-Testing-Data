function getCardValue(card) {
  // Extract the rank by removing the last character (suit)
  const rank = card.slice(0, -1);

  // Handle Ace
  if (rank === "A") return 11;

  // Handle face cards and 10
  if (["K", "Q", "J", "10"].includes(rank)) return 10;

  // Handle number cards 2-9
  const rankNumber = Number(rank);
  if (!isNaN(rankNumber) && rankNumber >= 2 && rankNumber <= 9) {
    return rankNumber;
  }

  // Invalid rank case
  throw new Error("Invalid card rank.");
}

module.exports = getCardValue;
