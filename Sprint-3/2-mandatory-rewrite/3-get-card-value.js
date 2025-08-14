function getCardValue(card) {
  const rank = card.slice(0, -1);
  
  if (rank === "A") return 11;
  if (["K", "Q", "J", "10"].includes(rank)) return 10;
  if (/^[2-9]$/.test(rank)) return Number (rank);
  
  throw new Error("Invalid card rank.");
}
module.exports = getCardValue;
