function getCardValue(card) {
  let rank = card.slice(0, -1);
  if (rank === "A") return 11;
  if (["J", "Q", "K"].includes(rank)) return 10;

  const numbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10"];
  if (numbers.includes(rank)) return parseInt(rank);
  throw new Error("Invalid card");
}

module.exports = getCardValue;
