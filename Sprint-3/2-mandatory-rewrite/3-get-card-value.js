function getCardValue(card) {
  rankChar = card.slice(0, -1); // drop the suit symbol

  if (rankChar === "A") return 11; // card is ace
  else if (
    rankChar === "10" ||
    rankChar === "J" ||
    rankChar === "Q" ||
    rankChar === "K"
  )
    return 10; // card is 10 or picture
  else if (rankChar.length > 1) {
    return "Invalid card rank.";
  } // if the card rank string is more than 1 character
  else if (
    Number(rankChar) % 1 === 0 &&
    Number(rankChar) >= 2 &&
    Number(rankChar) <= 9
  ) {
    // card is integer number between 2 and 9
    return Number(rankChar);
  } else return "Invalid card rank."; // it is not a card
}
module.exports = getCardValue;
