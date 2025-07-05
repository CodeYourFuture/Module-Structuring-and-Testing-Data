function getCardValue(card) {
    let noSuitPart = card.substring(0, card.length - 1);
    let suits = ["♠", "♥", "♦", "♣"];
    let faceCards = ['J', 'Q', 'K', 'A'];
    let correctCardNumbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10"];

    if (!suits.includes(card[card.length - 1])) {
        throw new Error("Invalid card suit.");
    }
    if (isNaN(Number(noSuitPart)) && !faceCards.includes(noSuitPart)) {
        throw new Error("Invalid card face.");
    }
    if (!isNaN(Number(noSuitPart)) && !correctCardNumbers.includes(noSuitPart)) {
        throw new Error("Invalid card number.");
    }
    if (card[0] === 'A') {
        return 11;
    } else if (noSuitPart == '10' || card[0] === 'J' || card[0] === 'Q' || card[0] === 'K') {
        return 10;
    } else if (Number(card[0]) >= 2 && Number(card[0]) <= 9) {
        return Number(card[0]);
    }
}
module.exports = getCardValue;