function getCardValue(card) {
    // replace with your code from key-implement..
    let rank=card.slice(0,-1);
    if (rank === "A") return 11;
    const allrank=["2","3","4","5","6","7","8","9","10"]
    if(allrank.includes(rank))return Number(rank);
    if(rank==="10"|| rank==="J" || rank==="Q" || rank==="K") return 10;
    else return "Invalid card rank";

}
module.exports = getCardValue;


// console.log(getCardValue("0x02♠"));
// console.log(getCardValue("2.1♠"));
// console.log(getCardValue("00_02♠"));
// console.log(getCardValue("3e0♠"));
// console.log(getCardValue("000002♠"));