function getCardValue(card) {

    const rank = card.slice(0, -1)
    console.log(rank)
      if (rank === "A") return 11;
      else if (rank === "K" || rank === "Q" || rank === "J") return 10;
      else if (rank >= 2 && rank <= 10) return Number(rank)
      else {
    throw new Error("Invalid card rank.")
    }  
  }
  
module.exports = getCardValue;