function getCardValue(card) {
  let rank;
  if (card.startsWith("10")) {
    rank = "10";
  } else {
    rank = card.charAt(0);
  }

  if (rank === "A") return 11;
  if (rank === "5") return 5;
  if (rank === "J" || rank === "Q" || rank === "K" || rank === "10") {
    return 10;
  }

  const validCards = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];

  if (!validCards.includes(rank)) {
    return "Invalid card rank";
  }
}
module.exports = getCardValue;
