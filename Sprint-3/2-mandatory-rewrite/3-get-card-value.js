function getCardValue(card) {
    // replace with your code from key-implement
    const rank = card.slice(0, -1); 
        if (rank === "A") return 11;
        if (["J", "Q", "K"].includes(rank)) return 10;

        const numericValue = parseInt(rank, 10);
        if(!isNaN(numericValue) && numericValue >= 2 && numericValue <= 10) {
            return numericValue;
        }
                     else throw new Error("Invalid card rank.");
                    }

module.exports = getCardValue;