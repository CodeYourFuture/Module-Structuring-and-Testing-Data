function getCardValue(card) {
    if (typeof card !== "string" || card.length < 2) {
    throw new Error("Invalid card input");
  }

  const trimmedCard = card.trim(); // handles whitespace at start/end
  const rank = trimmedCard.slice(0, -1).trim(); // Remove suit, trim spaces

  // Handle special cases for Ace and face cards
  if (rank === "A") return 11;
  if (["K", "Q", "J", "10"].includes(rank)) return 10;
  
  // Digits 2–9
  if ("23456789".includes(rank)) return Number(rank);

  throw new Error("Invalid card rank");
}

  
module.exports = getCardValue;