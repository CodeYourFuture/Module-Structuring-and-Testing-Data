function getCardValue(card) {
    if (typeof card !== "string" || card.length < 2) {
    throw new Error("Invalid card input");
  }

  const trimmedCard = card.trim(); // handles whitespace at start/end
  const rank = trimmedCard.slice(0, -1).trim(); // Remove suit, trim spaces

  // Handle special cases for Ace and face cards
  if (rank === "A") return 11;
  if (["K", "Q", "J", "10"].includes(rank)) return 10;
  
  // It should be a string of digits, not starting with zero, and between 2-10
  if (!/^[1-9][0-9]*$/.test(rank)) {
    throw new Error("Invalid card rank");
  }
  // Convert rank to a number and check if it's between 2 and 10
  const numericRank = Number(rank);
  if (
    !isNaN(numericRank) &&
    Number.isInteger(numericRank) &&
    numericRank >= 2 &&
    numericRank <= 10
  ) {
    return numericRank;
  }

  throw new Error("Invalid card rank");
}

  
module.exports = getCardValue;