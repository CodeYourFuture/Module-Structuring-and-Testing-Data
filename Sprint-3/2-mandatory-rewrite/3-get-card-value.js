function getCardValue(card) {
    // replace with your code from key-implement
   
    function getCardValue(card) {
        const rank = card.slice(0, -1);
          if (rank === "A") return 11;
          if (rank === "J" || rank === "Q" || rank === "K" || rank === "10") return 10;
          if (rank >= "2" && rank <= "9") return parseInt(rank);
          throw new Error("Invalid card rank");
        }
}
module.exports = getCardValue;