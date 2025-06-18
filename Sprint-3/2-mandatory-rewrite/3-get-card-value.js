function getCardValue(card) {
    if (card === "Ace of Spades") return 11;
    if (card === "Numerical card") return 2-10;
}
module.exports = getCardValue;