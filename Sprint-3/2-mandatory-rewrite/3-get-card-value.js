function getCardValue(card) {
    let rank = card.slice(0, -1);// extract rank everything except last character(suit)
    if (rank === "A") {
        return 11
    }else if(!isNaN(rank) && rank>="2" && rank<="9"){
       return parseInt(rank, 10);
    }else if (rank === "K" || rank === "J" || rank === "Q" || rank === "10") {
       return 10;
    }else{
       throw new Error("Invalid card rank.");
    }
}
module.exports = getCardValue;