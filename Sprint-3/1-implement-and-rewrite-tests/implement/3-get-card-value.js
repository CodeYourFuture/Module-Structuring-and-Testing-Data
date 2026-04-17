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

  // Number cards (STRICT check)
  const validNumbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10"];

  if (validNumbers.includes(rank)) {
    return Number(rank);
  }

  // Everything else = invalid
  throw new Error("Invalid card");
}

module.exports = getCardValue;