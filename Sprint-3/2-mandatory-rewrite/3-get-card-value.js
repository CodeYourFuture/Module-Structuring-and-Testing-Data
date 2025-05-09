function getCardValue(card) {
    // replace with your code from key-implement
    let match = card.match(/^([2-9]|10|[JQKA])([♠♣♦♥])?$/);
    if (!match) return "Invalid card rank";
    let rank = match[1];     
    if (rank === "A") return 11;
    if (rank === "J" || rank === "Q" || rank === "K" || rank === "10") return 10;
    return Number(rank); 
}

module.exports = getCardValue;

console.log((getCardValue("ABC♠"))); // "Invalid card rank"
console.log((getCardValue("A♠"))); // 11
console.log((getCardValue("J♠"))); // 10
console.log((getCardValue("A"))); // 11
console.log((getCardValue("7♠"))); // 11
console.log((getCardValue("100♠"))); // "Invalid card rank"
console.log((getCardValue("10.0"))); // "Invalid card rank"
console.log((getCardValue("1e1"))); // "Invalid card rank"
