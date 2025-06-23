function getCardValue(card) {
  let rank = card.slice(0,-1);
  if (rank === "A") return 11;
  if (Number.isInteger(Number(rank))) return Number(rank);
  if (rank === 'K' || rank === 'J' || rank === 'Q'){ return 10;
  } else { 
    return "Invalid card rank.";}
}
module.exports = getCardValue;