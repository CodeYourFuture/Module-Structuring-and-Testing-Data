function getCardValue(card) {
    switch(card) {
        case "A♠":
        case "A":
            return 11;
            break;
        case "2♠":
            return 2;
            break;
        case "3♠":
            return 3;
            break;
        case "4♠":
            return 4;
            break;
        case "5♠":
            return 5;
            break;
        case "6♠":
            return 6;
            break;
        case "7♠":
            return 7;
            break;
        case "8♠":
            return 8;
            break;
        case "9♠":
            return 9;
            break;
        case "10♠":
        case "J♠":
        case "K♠":
        case "Q♠":
            return 10;
            break;
        default:
            throw new Error("Invalid card rank");

    }   
}
module.exports = getCardValue;