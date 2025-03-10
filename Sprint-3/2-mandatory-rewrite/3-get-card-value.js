function getCardValue(card) {
    const rank = card.slice(0, -1);
  
    if (rank === "A") {
        return 11;
    }
  
    if (rank === "K" || rank === "Q" || rank === "J" || rank === "10") {
        return 10;
    }
    
    const number = parseInt(rank, 10);
    if (!isNaN(number) && number >= 2 && number <= 9) {
        return number;
    }
    throw new Error("Invalid card rank.");
    // replace with your code from key-implement
}
module.exports = getCardValue;