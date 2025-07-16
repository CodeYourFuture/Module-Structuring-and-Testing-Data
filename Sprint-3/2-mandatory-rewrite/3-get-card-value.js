function getCardValue(card) {
  if (typeof card !== 'string' || card.length < 2) {
    return 'Invalid card rank.';
  }

  const validSuits = ['♠', '♥', '♦', '♣'];
  const suit = card.slice(-1); // Last character
  const rank = card.slice(0, -1); // Everything before last character

  if (!validSuits.includes(suit)) {
    return 'Invalid card rank.';
  }

  if (rank === 'A') {
    return 11;
  } else if (['J', 'Q', 'K'].includes(rank)) {
    return 10;
  } else if (!isNaN(rank)) {
    const numericRank = Number(rank);
    if (numericRank >= 2 && numericRank <= 10) {
      return numericRank;
    }
  }

  return 'Invalid card rank.';
}

module.exports = getCardValue;
