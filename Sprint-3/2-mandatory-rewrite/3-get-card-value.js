function getCardValue(card) {
  let rank = card.slice(0, -1); // Extract the rank part of the card
  if (rank === "A") return 11;

  if (["J", "Q", "K"].includes(rank)) return 10;
  const num = Number(rank);
  if (!isNaN(num) && num >= 2 && num <= 10) {
    return num;
  }
  throw new Error("Invalid card");
}
module.exports = getCardValue;
