function getCardValue(card) {
    const rank = card.slice(0, 1)
    switch(rank) {
        case "A":
            return 11;
            break;
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "10":
            return Number(rank);
            break;
        case "J":
        case "K":
        case "Q":
            return 10;
            break;
        default:
            throw new Error("Invalid card rank");

    }   
}
module.exports = getCardValue;