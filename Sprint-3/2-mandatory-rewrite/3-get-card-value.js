function getCardValue(card) {
  if (typeof card !== "string") {
    throw new Error("Card must be a string");
  }

  card = card.trim().toUpperCase();

  // Extract rank (everything except last char, assuming last is suit)
  const rank = card.slice(0, -1);

  // Define allowed ranks exactly — no fuzzy matching
  const validRanks = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];

  if (!validRanks.includes(rank)) {
    throw new Error("Invalid card rank");
  }

  if (rank === "A") return 11;
  if (["K", "Q", "J"].includes(rank)) return 10;

  // If rank is numeric (2-10), safely convert to number
  // we can use 'Number(rank)' instead of 'parseint(rank, 10)'
  return Number(rank);
}

module.exports = getCardValue;
