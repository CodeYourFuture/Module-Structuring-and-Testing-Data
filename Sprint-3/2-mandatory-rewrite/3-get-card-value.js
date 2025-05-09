function getCardValue(card) {
  // replace with your code from key-implement
  if (typeof card !== "string") {
    throw new Error("Card must be a string");
  }
  const rank = card.slice(0, -1);
  if (rank === "A") return 11;

  if (!isNaN(rank) && rank >= 2 && rank <= 9) return parseInt(rank, 10);

  if (["K", "Q", "J", "10"].includes(rank)) return 10;
  const validRanks = [
    "A",
    "K",
    "Q",
    "J",
    "10",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];
  if (!validRanks.includes(rank)) {
    throw new Error("Invalid card rank");
  }
}

module.exports = getCardValue;
