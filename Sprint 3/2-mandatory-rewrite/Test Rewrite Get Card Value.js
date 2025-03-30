function getCardValue(card) {
    switch (card) {
        case 'A':
            return 1;
        case 'J':
        case 'Q':
        case 'K':
            return 10;
        default:
            return parseInt(card);
    }
}

module.exports = getCardValue;
