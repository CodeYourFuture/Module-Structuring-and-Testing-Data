function getCardValue(card) {
    const faceCards = ["10", "J", "Q", "K"];
  const rank = card.slice(0, -1);
  if (rank === "A") return 11;
  if (!isNaN(rank) && Number(rank) >= 2 && Number(rank) <= 9)
    return Number(rank);
  if (faceCards.includes(rank)) return 10;
  throw new Error("Invalid card rank"); 
}
module.exports = getCardValue;