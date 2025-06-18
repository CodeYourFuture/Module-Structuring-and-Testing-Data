function getCardValue(card) {
    if (card === "Ace of Spades") return 11;
    if (card === "Number Cards") return "2-10";
    if (card === "Ace") return "A";
    if (card === "Face Cards") return "J, Q, K";
    
}
module.exports = getCardValue;