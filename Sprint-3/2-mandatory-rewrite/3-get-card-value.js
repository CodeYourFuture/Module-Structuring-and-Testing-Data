function getCardValue(card) {
    let suits = ["♠", "♥", "♦", "♣"];
    if (!suits.includes(card[card.length - 1])) {
        throw new Error("Invalid card rank.");
    }
    if (card.substring(0, card.length - 1) !== "10" && !isNaN(Number(card[0])) && Number(card[0]) < 2) {
        throw new Error("Invalid card rank.");
    }
    if (card[0] === 'A') {
        return 11;
    } else if (card.substring(0, card.length - 1) == '10' || card[0] === 'J' || card[0] === 'Q' || card[0] === 'K') {
        return 10;
    } else if (Number(card[0]) >= 2 && Number(card[0]) <= 9) {
        return Number(card[0]);
    }
}
module.exports = getCardValue;