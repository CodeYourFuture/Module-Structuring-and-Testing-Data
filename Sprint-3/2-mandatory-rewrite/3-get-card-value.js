function getCardValue(card) {
  const rank = card.slice(0, -1); // get the value part: A, 2–10, J, Q, K

  if (rank === "A") return 11;
  if (["K", "Q", "J"].includes(rank)) return 10;

  const number = parseInt(rank);
  if (!isNaN(number) && number >= 2 && number <= 10) return number;

  throw new Error("Invalid card");
}

module.exports = getCardValue;
