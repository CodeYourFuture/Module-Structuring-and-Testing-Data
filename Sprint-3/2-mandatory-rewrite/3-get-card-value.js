function getCardValue(card) {
  // Extract the rank from the card string
  const rank = card.slice(0, -1); // Get all characters except the last
  if (rank === "A") return 11;
  if (!isNaN(rank)) {
    // If the rank is a number (2-10)
    return parseInt(rank, 10); // Convert to integer
  }
  if (["J", "Q", "K"].includes(rank)) {
    // If the rank is a face card or 10
    return 10; // All face cards and 10 are worth 10 points
  }
  throw new Error("Invalid card rank"); // If the rank is not recognized, throw an

}

module.exports = getCardValue;