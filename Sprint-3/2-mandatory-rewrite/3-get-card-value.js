function getCardValue(card) {
    // replace with your code from key-implement
    const value = card.slice(0, -1);
    const rank = value.toString();
    if (rank === "A") return 11;
    if (rank === "2") return 2;
    if (rank === "3") return 3;
    if (rank === "4") return 4;
    if (rank === "5") return 5;
    if (rank === "6") return 6;
    if (rank === "7") return 7;
    if (rank === "8") return 8;
    if (rank === "9") return 9;
    if(["10", "J", "Q", "K"].includes(rank)) return 10;
    throw new Error("Invalid card rank")
}
module.exports = getCardValue;

// console.log(getCardValue("A♠"));
// console.log(getCardValue("5♠"));
// console.log(getCardValue("10♠"));
// console.log(getCardValue("J♠"));
// console.log(getCardValue("11"));
