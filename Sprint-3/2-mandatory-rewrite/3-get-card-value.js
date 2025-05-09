function getCardValue(card) {
    let rank = card.slice(0, -1);// extract rank everything except last character(suit)
    if (rank === "A") {
        return 11
    }else if (/^[2-9]$|^10$/.test(rank)){// insure rank is a valid integer between 2 to 10
       return parseInt(rank, 10);
    }else if (rank === "K" || rank === "J" || rank === "Q" || rank === "10") {
       return 10;
    }else{
       throw new Error("Invalid card rank.");
    }
}
module.exports = getCardValue;