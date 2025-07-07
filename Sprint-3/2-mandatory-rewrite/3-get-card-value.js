function getCardValue(card) {
    const rankChar = card.slice(0, -1);
    const rankInt = parseInt(rankChar);

    if (rankChar === "A") return 11;
    if (["K", "Q", "J", "10"].includes(rankChar)) return 10;// If rank is 'K', 'Q', or 'J' (King, Queen, Jack), return 10 points
    if (rankInt >= 2 && rankInt <= 9 && rankChar === rankInt.toString()) return rankInt;

    throw new Error("Invalid card rank.");
} 
module.exports = getCardValue;