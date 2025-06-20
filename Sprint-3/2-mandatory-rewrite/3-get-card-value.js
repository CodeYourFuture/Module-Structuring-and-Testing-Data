function getCardValue(card) {
  rankChar = card.slice(0, -1); // drop the suit symbol
  rankInt = parseInt(rankChar);
  if (rankChar === "A") return 11; // card if ace
  else if (rankChar === "J" || rankChar === "Q" || rankChar === "K")
    return 10; // card is picture
  else if (rankInt >= 2 && rankInt <= 10)
    return rankInt; // card is number between 2 and 10
  else return "Invalid card rank."; // it is not a card
}
module.exports = getCardValue;
