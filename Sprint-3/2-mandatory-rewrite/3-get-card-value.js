function getCardValue(card) {
    const rank = card.slice(0, -1)

    if (rank === "A" || rank == "A") return 11;
    if (rank >= "2" && rank <= "9") return Number(rank);
    if (rank === "10" || rank ==="Q"|| rank === "J" || rank === "K") return 10; 
    return "Invalid card rank";
}


module.exports = getCardValue;