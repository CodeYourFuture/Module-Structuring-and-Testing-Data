function getCardValue(card) {
    if (card.slice(0, 2) == '10') {
        return 10;
        }
        
        let rank = card.length > 2 ? card.slice(0,2) : card[0];
      
        if (rank === 'A') {
        return 11;
        } else if (rank >= 2 && rank <= 9) {
        return parseInt(rank);
        } else if (rank === 'J' || rank === 'Q' || rank === 'K') {
        return 10;
        } else
        return "Invalid card rank"
}

module.exports = getCardValue;