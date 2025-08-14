function getCardValue(card) {
    const rank = card.slice(0, -1); // remove the suit emoji
    if (rank === "A") return 11;
    if (["K", "Q", "J", "10"].includes(rank)) return 10;

  const num = parseInt(rank);

  if (num >= 2 && num <= 9) return num;

  throw new Error("Invalid card rank: '${rank}'"); // now it shows what specific rank is invalid 
}
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

const aceofSpades = getCardValue("A♠");
assertEquals(aceofSpades, 11);
const fiveofHearts = getCardValue("5♥");
assertEquals(fiveofHearts, 5);
const jackOfDiamonds = getCardValue("J♦");
assertEquals(jackOfDiamonds, 10);

const queenOfClubs = getCardValue("Q♣");
assertEquals(queenOfClubs, 10);

const kingOfSpades = getCardValue("K♠");
assertEquals(kingOfSpades, 10);




module.exports = getCardValue;