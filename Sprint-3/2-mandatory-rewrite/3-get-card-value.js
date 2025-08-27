function getCardValue(card) {
    rank = card.slice(0, -1);
    if (rank === "A") return 11;
    const numRank = parseInt(rank)
    if ([2, 3, 4, 5, 6, 7, 8, 9].includes(numRank)) return parseInt(numRank);
    if (["J", "Q", "K", "10"].includes(rank)) return 10;
    if (rank === "A") return 11;

    throw new Error("Invalid card rank.");
}
module.exports = getCardValue;