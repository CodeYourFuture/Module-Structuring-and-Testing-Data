//function getCardValue(card) {
    // replace with your code from key-implement
    //return 11;
//}
function getCardValue(card) {
    const rank = card.slice(0, -1); 
    if (rank === "A") return 11;
    if (["J", "Q", "K", "10"].includes(rank)) return 10;
    if(!isNaN(rank)) return parseInt(rank);

    throw new Error("Invalid card rank.");
}
module.exports = getCardValue;