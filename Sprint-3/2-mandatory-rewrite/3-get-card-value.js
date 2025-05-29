function getCardValue(card) {
    let rank;
    if (card.length === 1) {
        rank = card;
      } else {
        rank = card.slice(0, card.length - 1);
      }

    if (rank === "A") {
      return 11;
    }
  
    if (["J", "Q", "K", "10"].includes(rank)) {
      return 10;
    }
    const number = parseInt(rank);
    if (number >= 2 && number <= 9) {
      return number;
    }
    return "Invalid card rank";
}
module.exports = getCardValue;