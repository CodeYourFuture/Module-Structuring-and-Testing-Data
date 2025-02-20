function getCardValue(card) {
if (rank === "A"){
     return 11;  // Ace is worth 11
  }

  else if (rank >= 2 && rank <= 10 ) {
    return Number(rank); // convert number to be between 2-10
  }
  else if ([rank = "J", "Q", "K",].includes(rank)) {
    return 10;  // face card is worth 10
  }
  
  else{
    throw new Error("Invalid card rank");  // throw an error when rank is invalid
}

}
module.exports = getCardValue;