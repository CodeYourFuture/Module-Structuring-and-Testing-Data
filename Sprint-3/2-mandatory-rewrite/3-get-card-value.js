function getCardValue(card) {
    const rank = card.slice(0, -1);

    if (rank === "A") return 11;

    if (["J", "Q", "K"].includes(rank)) return 10;

    const num = Number(rank);
    if (num >= 2 && num <= 10) return num;

    throw new Error("Invalid card rank");
}
module.exports = getCardValue;
