function getCardValue(card) {
  // Extract the rank by removing the suit
  const rank = card.slice(0, -1); 
  
  // Check if the rank is valid (either a number or a valid face card)
  if (!/^(2|3|4|5|6|7|8|9|10|A|J|Q|K)$/.test(rank)) {
    return "Invalid Card Rank";
  }
  // Handle Ace
  if (rank === "A") return 11;
  
  // Handle number cards (2-9)
  if (rank >= 2 && rank <= 9) return Number(rank);
  
  // Handle "10"
  if (rank === "10") return 10;

  // Handle face cards (J, Q, K)
  if (["J", "Q", "K"].includes(rank)) return 10;

  return "Invalid Card Rank";
}
module.exports = getCardValue;
