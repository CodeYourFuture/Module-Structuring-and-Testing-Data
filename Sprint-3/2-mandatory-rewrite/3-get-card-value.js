function getCardValue(card) {
  const rank = card.slice(0,-1)

    if(rank === "A") return 11;
    if (["J","Q","K"].includes(rank))  return 10;
    if(!isNaN(rank) && Number(rank) >= 2 && Number(rank) <= 10 ) return Number(rank);
      return "Invalid card rank"
    
      
   
}
module.exports = getCardValue;