function getCardValue(card) {
    // replace with your code from key-implementif 
        if (typeof card !== "string" || card.length < 1) {
            throw new Error("Invalid card value");
        }
        const cardRank = card.replace(/[♠♣♦♥]/g, '');

       /* if (!isNaN(cardRank)) {
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
    }*/

        // new code:
            const validRanks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
            if (!validRanks.includes(cardRank)) {
                throw new Error("Invalid card value");
            };
            if (cardRank === "A") return 11;
            if (["J", "Q", "K"].includes(cardRank)) return 10;
               return Number(cardRank);
            };
    module.exports = getCardValue;