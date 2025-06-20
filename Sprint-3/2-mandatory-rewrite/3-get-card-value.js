// replace with your code from key-implement

function getCardValue(card) {
  const rank = card.slice(0, -1); // remove last character 
  const numberCards = Number(rank);

  if (rank === "A") return 11;
  if (["K", "Q", "J", "10"].includes(rank)) return 10; // To handle face cards
  if (!isNaN(numberCards) && numberCards >= 2 && numberCards <= 10) { // Check that numberCards is a valid number and ensure they are within range (2–10)
    return numberCards;
  }
  return "Invalid card rank";
}

module.exports = getCardValue;