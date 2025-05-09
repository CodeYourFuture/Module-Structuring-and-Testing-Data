function getCardValue(card) {
  let rank;
  
  if (card.length === 3 &&  card.substring(0, card.length - 1) === "10"){
    rank = "10";
  } else {
    if ((card.substring(0, card.length - 1)).length > 1 ){
      throw new Error("Invalid card rank");
    } else {
      rank = card.charAt(0);
    }
  }
  
  if (rank === "A") {
    return 11;
  } else if  (Number(rank) >= 2 && Number(rank) <= 9) {
    return Number(rank);
  } else if (rank === "10" || rank === "J" || rank === "Q" || rank === "K") {
    return 10;
  } else {
    throw new Error("Invalid card rank.");
  }
}

//getCardValue("2.000♠");
//getCardValue("02♠");
//getCardValue("0x02♠");
//getCardValue("+2♠");
//getCardValue("AA♠");
//getCardValue("2.1♠");
//Every example gave error as expected
module.exports = getCardValue;