function getCardValue(rank) {
  if (rank === "A") return 11;
  if (rank === "A♠") return 11;
  if (rank === "2") return 2;
  if (rank === "3") return 3;
  if (rank === "4") return 4;
  if (rank === "5") return 5;
  if (rank === "6") return 6;
  if (rank === "7") return 7;
  if (rank === "8") return 8;
  if (rank === "9") return 9;

  if (rank === "10" || rank === "J" || rank === "K" || rank === "Q") return 10;
  else return "Invalid card rank";
}
module.exports = getCardValue;
