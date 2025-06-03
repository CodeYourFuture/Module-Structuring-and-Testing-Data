function getCardValue(card) {
  let rank = card.slice(0, -1);

  if (rank === "A") return 11;

  const numbers = ["2", "3", "4", "5", "6", "7", "8", "9"];
  if (numbers.includes(rank)) return parseInt(rank);

  if (["10", "J", "Q", "K"].includes(rank)) return 10;

  return "Invalid card rank";
}
module.exports = getCardValue;
