function getCardValue(card) {
  if (!card || typeof card !== "string") {
    return "Invalid card format";
  }

 
  const rank = card.length === 1 ? card : card.slice(0, -1);

  if (rank === "A") {
    return 11;
  }

  if (["K", "Q", "J", "10"].includes(rank)) {
    return 10;
  }

  const number = parseInt(rank);
  if (!isNaN(number) && number >= 2 && number <= 9) {
    return number;
  }

  return "Invalid card rank";
}

 
module.exports = getCardValue;