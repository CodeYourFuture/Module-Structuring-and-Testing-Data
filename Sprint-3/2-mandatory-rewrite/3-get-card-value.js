function getCardValue(card) {
    // replace with your code from key-implement
        if (!isNaN(card)) {
            return parseInt(card);
        }
        switch (card) {
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