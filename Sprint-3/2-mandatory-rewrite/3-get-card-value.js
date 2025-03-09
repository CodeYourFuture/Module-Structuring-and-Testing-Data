function getCardValue(card) {
    // replace with your code from key-implementif 
        if (typeof card !== "string" || card.length < 1) {
            throw new Error("Invalid card value");
        }
        const cardRank = card.replace(/[♠♣♦♥]/g, '');
    
        if (!isNaN(cardRank)) {
            return parseInt(cardRank); 
        }
        
        switch (cardRank) {
            case 'J':
            case 'Q':
            case 'K':
                return 10; 
            case 'A':
                return 11; 
            default:
                throw new Error("Invalid card value"); 
        }
    }
    module.exports = getCardValue;