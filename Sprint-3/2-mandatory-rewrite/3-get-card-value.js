function getCardValue(card) {
  if (typeof card !== "string") return "Input should be a string.";
  
  const allCards = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
  const faceCards = ["K", "Q", "J"];

  // If card entered without suit
  if (allCards.includes(card.toUpperCase()) && card.length <= 2) {
    if (card === "A") return 11;
    if (faceCards.includes(card.toUpperCase())) return 10;
    return Number(card)
  }

// If card entered with suit
const cardValue = card.slice(0, -1).toUpperCase();
  if (allCards.includes(cardValue)) {
    if (faceCards.includes(cardValue)) return 10;
    if (cardValue === "A") return 11;
    return Number(cardValue);
  }

  return "Error: Invalid card rank";
}


module.exports = getCardValue;

console.log(getCardValue("120"))
