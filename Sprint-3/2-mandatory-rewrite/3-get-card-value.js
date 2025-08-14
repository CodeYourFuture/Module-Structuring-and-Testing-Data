function getCardValue(card) {
    const rank = card.slice(0, -1); // strip off the suit emoji

    if (rank === "A") return 11;
    if (["K", "Q", "J", "10"].includes(rank)) return 10;

   // Accept only exact digits 2 through 9
    if (/^[2-9]$/.test(rank)) {
        return Number(rank);
    }
    throw new Error("Invalid card rank");
}
module.exports = getCardValue;
   