function getCardValue(card) {
    // replace with your code from key-implement
    const rank = card.slice(0, -1);
        if (rank === "A") return 11
        else if (["J", "Q", "K", "10"].includes(rank)) 
            {return 10}
        else if (/^[2-9]$/.test(rank)) {
            return Number(rank)} 
        else { throw new Error("Invalid card rank.");}
}
module.exports = getCardValue;
