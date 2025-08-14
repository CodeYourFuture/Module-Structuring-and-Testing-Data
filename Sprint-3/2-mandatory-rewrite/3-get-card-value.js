function getCardValue(card) {
  let rank;
  if (card === "10"){
    rank = card;
  } else {
    rank = card.charAt(0);
  }
  if (rank === "A") {
    return 11;
  } else if  (Number(rank) >= 2 && Number(rank) <= 9) {
    return Number(rank);
  } else if (rank === "10" || rank === "J" || rank === "Q" || rank === "K") {
    return 10;
  } else {
    throw new Error("Invalid card rank");
  }
}
module.exports = getCardValue;