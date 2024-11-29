// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// You will need to implement a function getCardValue

function getCardValue(card) {
  let rank = card.slice(0, -1);

  if (rank === "A") return 11;
  if (rank === "J" || rank === "Q" || rank === "K" || rank === "10") return 10;
  rank = Number(rank);

  if (rank < 2 || rank > 10 || isNaN(rank)) {
    throw new Error("Invalid card rank.");
  }
  return rank;
}

module.exports = getCardValue;
