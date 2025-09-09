function getCardValue(card) {
  const rank = card.slice(0, -1); // remove suit (last char)

  if (!rank) throw new Error("Invalid card rank");

  if (rank === "A") return 11;
  if (["K", "Q", "J"].includes(rank)) return 10;
  if (rank === "10") return 10;

  // Explicit check for number cards (2–9 only, no leading zeros or decimals)
  if (/^[2-9]$/.test(rank)) {
    return Number(rank);
  }

  throw new Error("Invalid card rank");
}

module.exports = getCardValue;
