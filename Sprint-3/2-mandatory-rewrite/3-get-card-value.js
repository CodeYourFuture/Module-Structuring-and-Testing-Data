

function getCardValue(card) {
    rank=card.slice(0,-1)
     // replace with your code from key-implement
    if (rank === "A") return 11;
    if (["2", "3","4","5","7","8", "9","10"].includes(rank)) return Number(rank);
    if (["J", "Q", "k"].includes(rank)) return 10;
    throw new Error("Invalid card rank.");
    
   
}
module.exports = getCardValue;