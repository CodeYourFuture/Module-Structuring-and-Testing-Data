function getCardValue(card) {
  // replace with your code from key-implement
  //return 11;
  let rank = card.slice(0, -1); //start from 0 until just before one last character
  if (rank === "A") return 11;
  else if ((rank === "10") | (rank === "J") | (rank === "Q") | (rank === "K"))
    return 10;
  else if (rank > 1 && rank < 10) return Number(rank);
  //need to convert to number, because === compare type and exact number
  else return null;
}
module.exports = getCardValue;
