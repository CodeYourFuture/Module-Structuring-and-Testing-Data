//function getCardValue(card) {
    // replace with your code from key-implement
  //  return 11;
//}
function getCardValue(card) {
    const rank = card.replace(/[♦♠♥♣]/g, "");
    if (rank === "A") return 11;
    if (rank === "10" || rank === "J" || rank ==="Q" || rank=== "K") return 10;
    if (rank >= "2" && rank <= "9") return Number(rank);
    if (!isNaN(rank) && Number(rank) >= 2 && Number(rank) <= 10) return Number(rank);
    return "Invalid";
}
module.exports = getCardValue;