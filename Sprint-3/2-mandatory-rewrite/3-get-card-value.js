function getCardValue(card) {
    // replace with your code from key-implement
    if (card === "A♠" || card === "A♣" || card === "A♦" || card === "A♥") return 11;
    if (card === "K♠" || card === "K♣" || card === "K♦" || card === "K♥") return 10;
    if (card === "Q♠" || card === "Q♣" || card === "Q♦" || card === "Q♥") return 10;
    if (card === "J♠" || card === "J♣" || card === "J♦" || card === "J♥") return 10;
    if (card === "10♠" || card === "10♣" || card === "10♦" || card === "10♥") return 10;
    
    // Handle Number Cards (2-10):
    const number = parseInt(card);
    if (number >= 2 && number <= 10) return number;

    // Handle Invalid Cards:
    return "Invalid card";
}

module.exports = getCardValue;
