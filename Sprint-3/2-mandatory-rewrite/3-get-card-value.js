function getCardValue(card) {
  const faceCards = ["K", "Q", "J"];
  if (typeof card !== "string") {
    throw new Error("Input should be a string.");
  }

  let cardRank;

  card.length < 2
    ? (cardRank = card)
    : (cardRank = card.slice(0, -1).toUpperCase());

  if (faceCards.includes(cardRank)) return 10;
  if (cardRank === "A") return 11;

  const cardValue = Number(cardRank);
  if (isNaN(cardValue)) {
    throw new Error(`Invalid card rank`);
  }

  return cardValue;
}
module.exports = getCardValue;
