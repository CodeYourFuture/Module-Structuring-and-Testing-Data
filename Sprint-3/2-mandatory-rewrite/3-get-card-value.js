function getCardValue(card) {
    // replace with your code from key-implement
    const rank = card.slice(0, -1);  // Get the rank (everything before the suit)
  
    if (rank === "A") return 11;  // Handle Ace
    
    // Check if the rank is a number between 2 and 10
    else if (!isNaN(rank) && rank >= 2 && rank <= 10) {
        return parseInt(rank);  // Return the rank as a number
    }
    
    // Handle face cards (J, Q, K)
    else if (rank === "J" || rank === "Q" || rank === "K") {
        return 10;
    }
    
    // Handle invalid cards
    throw new Error("Invalid card rank.");
  }
  
   
module.exports = getCardValue;