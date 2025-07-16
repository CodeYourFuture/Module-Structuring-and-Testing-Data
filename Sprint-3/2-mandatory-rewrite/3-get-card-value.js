function getCardValue(card) {
  const rank = card.slice(0, -1);
  if (/^(10|[2-9])$/.test(rank)) {
    return Number(rank);
  } else if (rank === "A") {
    return 11;
  } else if (rank === "Q" || rank === "K" || rank === "J") {
    return 10;
  } else {
    throw new Error("Invalid card rank");
  }
}
// console.log(getCardValue("0x02♠"));
module.exports = getCardValue; 