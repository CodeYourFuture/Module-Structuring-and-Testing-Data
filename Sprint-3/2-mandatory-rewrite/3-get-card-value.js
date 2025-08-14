function getCardValue(card) {
  // replace with your code from key-implement
  let rank = card[0];
  if (rank === "A") return 11;
  else if (rank >= "2" && rank <= "9") return Number(rank);
  else if (rank == "10" || rank == "J" || rank == "Q" || rank == "K") return 10;
  else return "Invalid Card rank";
}
module.exports = getCardValue;
