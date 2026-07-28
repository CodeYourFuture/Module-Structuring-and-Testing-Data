// Implement a function getCardValue, when given a string representing a playing card,
// should return the numerical value of the card.
function getCardValue(card) {
  const suit = card.slice(-1);
  const rank = card.slice(0, -1);
  const validSuits = ["♠", "♥", "♦", "♣"];
  const validRanks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  if (!validSuits.includes(suit) || !validRanks.includes(rank)) {
    throw new Error(`Invalid card: ${card}`);
  }
  if (rank === "A") return 11;
  if (["J", "Q", "K"].includes(rank)) return 10;
  return Number(rank);
}
module.exports = getCardValue;
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}
assertEquals(getCardValue("9♠"), 9);
assertEquals(getCardValue("A♠"), 11);
assertEquals(getCardValue("10♥"), 10);
assertEquals(getCardValue("J♣"), 10);
assertEquals(getCardValue("Q♦"), 10);
assertEquals(getCardValue("K♦"), 10);
try {
  getCardValue("invalid");
  console.error("Error was not thrown for invalid card");
} catch (e) {
  console.log("Error thrown for invalid card");
}