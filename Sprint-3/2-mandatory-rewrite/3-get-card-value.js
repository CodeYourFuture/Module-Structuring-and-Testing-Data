function getCardValue(card) {
    // replace with your code from key-implement
    let rank = card[0];
    if (rank === "A") return 11;
    else if (Number(rank) >= 2 && Number(rank) <= 9) return (Number(rank));
    else if (rank === "J" || rank === "Q" || rank === "K") return 10;
    else if (Number(card.slice(0,2)) === 10) return 10;
    else return "Invalid card rank";
}
module.exports = getCardValue;