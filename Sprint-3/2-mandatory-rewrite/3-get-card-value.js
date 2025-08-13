function getCardValue(card) {
  if (!card || typeof card !== "string") return null;

  const value = card.slice(0, -1); // Remove suit (last character)

  if (value === "A") return 11;
  if (["J", "Q", "K"].includes(value)) return 10;

  const number = Number(value);
  if (number >= 2 && number <= 10) return number;

  return null; // Invalid card
}

module.exports = getCardValue;
