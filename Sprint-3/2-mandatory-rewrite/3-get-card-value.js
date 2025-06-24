function getCardValue(card) {
  // replace with your code from key-implement
  let rank = card.slice(0, -1);

  if (rank === "A") return 11;
  if (rank >= "2" && rank <= "9") return parseInt(rank);
  if (["10", "J", "Q", "K"].includes(rank)) return 10;

  throw Error("Invalid card rank");
}

module.exports = getCardValue;
