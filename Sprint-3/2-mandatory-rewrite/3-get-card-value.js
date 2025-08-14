function getCardValue(card) {
  // replace with your code from key-implement
  let rank = card[0];
  
  if (["♠", "♥", "♦", "♣"].includes(card.slice(-1))){
    if (card.length > 2) {
      rank = card.slice(0, card.length - 1);
    }

  if (rank === "A") return 11;
  if (["2", "3", "4", "5", "6", "7", "8", "9", "10"].includes(rank))
    return parseInt(rank);
  if ( ["J", "Q", "K"].includes(rank) )
    return 10;
}
  throw new Error("Invalid card rank.");
}
module.exports = getCardValue;
