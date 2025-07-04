function getCardValue(card) {
   const rank = card.slice(0, -1); // removes suit

  if (rank === "A") return 11;
  if (!isNaN(rank)) return parseInt(rank); // 2-10
  if (["J", "Q", "K"].includes(rank)) return 10;

  throw new Error("Invalid card rank"); 
}
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

module.exports = getCardValue;