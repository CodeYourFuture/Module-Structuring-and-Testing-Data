function getCardValue(card) {
  const rank = card;

  if (rank === "A") return 11;
  if (["J", "Q", "K"].includes(rank)) return 10;
  const number = Number(rank);
  if (number >= 2 && number <= 10) return number;
  throw new Error("Invalid card rank");
}
module.exports = getCardValue;
