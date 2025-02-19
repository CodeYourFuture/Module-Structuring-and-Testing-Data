function getCardValue(card) {
    const rank = card.substring(0, card.length - 1);
    if (rank === "A") return 11;
    else if (Number(rank) >= 2 && Number(rank) <= 10) return Number(rank);
    else if (rank === "J" || rank === "Q" || rank === "K") return 10;
    else return "Invalid card rank.";
    // replace with your code from key-implement


}
module.exports = getCardValue;