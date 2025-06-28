function getCardValue(card) {
  let rank = card.slice(0, -1); // Extract the rank part of the card
  if (rank === "A") return 11;

  if (["J", "Q", "K"].includes(rank)) return 10;
  if (!isNaN(rank) && rank >= 2 && rank <= 10) return parseInt(rank, 10);
  throw new Error("Invalid card");
}
module.exports = getCardValue;
