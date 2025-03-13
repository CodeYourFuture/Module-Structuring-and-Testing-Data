function getCardValue(card) {
    // replace with your code from key-implement
    let rank = card.slice(0, -1);
    if (rank === "A") return 11;
    if (Number(rank) === 10 || rank === "J" || rank === "Q" || rank === "K") return 10;
    if (Number(rank) >= 2 && Number(rank) <= 9 && (Number.isInteger(Number(rank)))) return (Number(rank));
    else return "Invalid card rank";
};

module.exports = getCardValue;