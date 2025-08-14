function getCardValue(card) {
  const rank = card.slice(0, -1); // Remove the last character (suit)

  if (rank === "A") return 11;
  if (["K", "Q", "J", "10"].includes(rank)) return 10;

  // Check if rank is a valid integer string between 2 and 9
  const number = Number(rank);
  const isInteger = /^[2-9]$/.test(rank); // Only accept digits 2–9 as string
  if (isInteger && number >= 2 && number <= 9) return number;

  throw new Error("Invalid card rank");
}

module.exports = getCardValue;
