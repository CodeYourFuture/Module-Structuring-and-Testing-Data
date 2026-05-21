function getCardValue(card) {
  const suits = ["♠", "♥", "♦", "♣"];

  if (typeof card !== "string" || card.length < 2) {
    throw new Error("Invalid card");
  }

  const suit = card.slice(-1);
  const rank = card.slice(0, -1);

  if (!suits.includes(suit)) {
    throw new Error("Invalid card");
  }

  // Ace
  if (rank === "A") return 11;

  // Face cards
  if (["J", "Q", "K"].includes(rank)) return 10;

  // Number cards (2–10)
  const num = Number(rank);

  if (!isNaN(num) && num >= 2 && num <= 10) {
    return num;
  }

  throw new Error("Invalid card");
}

module.exports = getCardValue;