function getCardValue(card) {
  const rank = card.slice(0, -1);
  if (rank === "A") return 11;

  const face_deck = ["10", "J", "Q", "K"];

  for (let i = 0; i < face_deck.length; i = i + 1) {
    if (rank === face_deck[i]) return 10;
  }

  const number_deck = ["2", "3", "4", "5", "6", "7", "8", "9"];

  for (let i = 0; i < number_deck.length; i = i + 1) {
    if (rank === number_deck[i]) return Number(rank);
  }
  console.log(`Invalid card rank, ${rank}`);
  return null;
}

module.exports = getCardValue;
