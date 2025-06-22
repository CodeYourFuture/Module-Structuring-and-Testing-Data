function getCardValue(card) {
  const rankChar = card.slice(0, -1); // Remove the last character (suit)
  const rankInt = parseInt(rankChar); // Try to convert rank to a number

  if (rankChar === "A") return 11; // Ace is worth 11
  else if (["K", "Q", "J"].includes(rankChar)) return 10; // Face cards worth 10
  else if (rankInt >= 2 && rankInt <= 10) return rankInt; // 2–10 cards
  else throw new Error("Invalid card rank.");
}
      
module.exports = getCardValue;