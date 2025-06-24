function getCardValue(card) {
    const rank = card.slice(0, -1); 
    // Everything except the last symbol (suit)

    if (rank === "A") return 11;
    if (["K", "Q", "J", "10"].includes(rank)) return 10;

    const number = Number(rank);
    if (number >= 2 && number <= 9) return number;

    throw new Error("Invalid card rank");
}

module.exports = getCardValue;