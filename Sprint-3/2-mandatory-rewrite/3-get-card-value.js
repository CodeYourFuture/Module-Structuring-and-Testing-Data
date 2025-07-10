function getCardValue(card) {
  const rank = card.slice(0, -1); // Get everything before the suit emoji

  if (rank === "A") return 11;
  if (["K", "Q", "J", "10"].includes(rank)) return 10;
  const number = parseInt(rank);
  if (number >= 2 && number <= 9) return number;

  throw new Error("Invalid card rank");
}
module.exports = getCardValue;

console.log(getCardValue("2XYZ♠")); // ==> 2
console.log(getCardValue("0x02♠")); // ==> 2
console.log(getCardValue("2.1♠")); // ==> 2
// console.log(getCardValue("00_02♠")); //==> Invalid card rank
console.log(getCardValue("2.5♥"));
