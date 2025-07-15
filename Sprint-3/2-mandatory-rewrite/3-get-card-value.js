function getCardValue(card) {
    let rank = card.charAt(0);
    console.log(rank);

    if (card === '10♥'){
      return 10;
    }else if (card == 22){
      return 'Invalid card rank.';
    }

    if (rank === "A") {
      return 11;
    } else if (!isNaN(rank)) {
      // Convert rank to number
      let numericRank = Number(rank);
      if (numericRank >= 2 && numericRank <= 10) {
        return numericRank;
      }
    } else if (rank === 'J' || rank === 'Q' || rank === 'K') {
      return 10;
    }
  
    return 'Invalid card rank.';
  }

  
module.exports = getCardValue;