function getCardValue(card) {
  if (card === "A") return 11;
  if (["K", "Q", "J", "10"].includes(card)) return 10;
  const num = Number(card);
  if (num >= 2 && num <= 9 && card === num.toString()) return num;
  throw new Error("Invalid card rank.");
}
module.exports = getCardValue;