function getCardValue(card) {
  // use an array to hold the values of the face cards.
  const faceCards = ["10", "J", "Q", "K"];

  /*
    use slice to extract the rank (the numeric or face card value) from the "card" value. Start at the beginning index of the string (0) and go up to but not including the last character (-1 means one from the end)
    */
  const rank = card.slice(0, -1);

  if (rank === "A") return 11; //handles Ace cards
  if (Number(rank) >= 2 && Number(rank) < 10) return Number(rank); //handles cards 2-9

  // use the includes() method to check if the value of the variable rank is one of the faceCards array values.
  if (faceCards.includes(rank)) return 10; //handles face cards

  // use the built-in JS Error() object to throw an error with a message if the value of "card" is invalid (with the message as the argument)
  throw new Error("Invalid card rank"); //handles all invalid "card" values
}

module.exports = getCardValue;
