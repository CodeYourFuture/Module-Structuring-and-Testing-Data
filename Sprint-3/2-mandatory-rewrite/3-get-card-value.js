function getCardValue(card) {
    // replace with your code from key-implement
    const rank = card.slice(0, -1); // Get the rank part of the card (everything except the last character)
    if (rank === "A") {
      return 11;
    } else if (rank === "K" || rank === "Q" || rank === "J" || rank === "10") {
      return 10;
    }else if (rank >= "2" && rank <= "9") {
      return parseInt(rank);
    }else {
      return "Invalid card rank.";
    }
}
module.exports = getCardValue;