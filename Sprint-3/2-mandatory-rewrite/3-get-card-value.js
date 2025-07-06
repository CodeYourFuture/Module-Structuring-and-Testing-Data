// replace with your code from key-implement

function getCardValue(card) {
  const rank = card.slice(0, -1);                                       // Remove last character/ suit symbol 
  const numberCards = ["2", "3", "4", "5", "6", "7", "8", "9", "10"];   // Define number cards in standard deck rather than relying on 'Number(rank)' to convert and check rank range.

  if (rank === "A") return 11; 
  if (["K", "Q", "J"].includes(rank)) return 10;                       // To handle face cards
  if (numberCards.includes(rank)) return Number(rank);                 // Check that numberCards are valid numbers and ensure they are within range (2–10)
  
  return "Invalid card rank";
}

module.exports = getCardValue;

/*
console.log(getCardValue("0x02♠"));
console.log(getCardValue("2.1♠"));
console.log(getCardValue("00_02♠"));
*/
