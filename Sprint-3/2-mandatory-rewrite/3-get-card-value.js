function getCardValue(card) {
    const rank = card.slice(0, -1); 
    const suit = card.slice(-1); 

    
    const validSuits = ["♠", "♣", "♦", "♥"];
    if (!validSuits.includes(suit)) {
        return "Invalid card";
    }

    
    if (rank === "A") return 11;

    
    if (["J", "Q", "K"].includes(rank)) return 10;

    
    const numericValue = parseInt(rank);
    if (!isNaN(numericValue) && numericValue >= 2 && numericValue <= 10) {
        return numericValue;
    }

    
    return "Invalid card";
}

module.exports = getCardValue;
