
function getCardValue(card) {
    const rank = card.slice(0, -1);
  
    if (rank === "A") return 11;
  
    const numericRank = parseInt(rank);
    if (!isNaN(numericRank) && numericRank >= 2 && numericRank <= 10) {
      return numericRank;
    }
  
    if (["J", "Q", "K"].includes(rank)) {
      return 10;
    }
  
    throw new Error("Invalid card rank.");
  }
module.exports = getCardValue;