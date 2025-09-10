function getCardValue(card) {
  const rank = card.slice(0, -1); // remove suit

  if (!rank) throw new Error(`Invalid card rank: ${card}`);

  if (rank === "A") return 11;
  if (["K", "Q", "J"].includes(rank)) return 10;
  if (/^(?:[2-9]|10)$/.test(rank)) return Number(rank);

  throw new Error(`Invalid card rank: ${card}`);
}

module.exports = getCardValue;

