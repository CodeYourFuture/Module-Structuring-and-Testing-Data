function getCardValue(card) {
  // replace with your code from key-implement
  //  return 11; // always return 11 for testing purposes that is wrong
  const rank = card.slice(0, -1); // Extract rank (everything except the last character)
  if (rank === "A") return 11; // handle Ace as 11
  if (["K", "Q", "J"].includes(rank)) return 10; // handle face cards as 10
  const numerincRank = parseInt(rank); //Handle number cards 2–9
  if (numerincRank >= 2 && numerincRank <= 9) {
    return numerincRank; // Return the numeric value for cards 2-9
  }
  // Invalid card rank
  return 0;
}
module.exports = getCardValue;

// // Test cases
console.log(getCardValue("A♠")); // 11
console.log(getCardValue("7♥")); // 7
console.log(getCardValue("K♦")); // 10
console.log(getCardValue("A♣")); // 11
