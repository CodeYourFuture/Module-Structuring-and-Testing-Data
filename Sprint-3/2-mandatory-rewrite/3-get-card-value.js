function getCardValue(card) {
    
        const rank = card.slice(0, -1); // Extract the rank (everything except the suit emoji)
      
        if (rank === "A") return 11;
        if (rank === "J" || rank === "Q" || rank === "K" || rank === "10") return 10;
        if (parseInt(rank) >= 2 && parseInt(rank) <= 9) return parseInt(rank);
        
        throw new Error("Invalid card rank");
      }
      
module.exports = getCardValue;