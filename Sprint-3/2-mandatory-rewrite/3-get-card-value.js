function getCardValue(card) {
    // replace with your code from key-implement
    
        const rank = card.slice(0, -1);
        if (rank === "A") return 11;
        if (!isNaN(rank) && Number(rank) >= 2 && Number(rank) <= 9) return Number(rank);
        if (rank === "10" || rank === "J" || rank === "Q" || rank === "K") return 10;
        else {
          throw new Error("Card not valid.");                 // card not valid if input is not in the scope of the card range/rank
        }
       
    }
module.exports = getCardValue;