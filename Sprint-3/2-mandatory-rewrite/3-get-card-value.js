function getCardValue(card) {
  if (typeof card !== "string" || card.length < 2) return 0;

  let rank = card;

  if (card.startsWith("10")) {
    rank = "10";
  } else {
    rank = card[0];
  }

  if (rank === "A") return 11;
  if (["K", "Q", "J"].includes(rank)) return 10;

  const numberValue = Number(rank);
  if (!isNaN(numberValue)) return numberValue;

  return 0;
}
module.exports = getCardValue;
