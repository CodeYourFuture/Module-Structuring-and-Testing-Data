// Implement a function getCardValue, when given a string representing a playing card,
// should return the numerical value of the card.

function getCardValue(card) {
  const suit = card.slice(-1);
  const rank = card.slice(0, -1);
  const validSuits = ["\u2660", "\u2665", "\u2666", "\u2663"];
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

assertEquals(getCardValue("9\u2660"), 9);
assertEquals(getCardValue("A\u2660"), 11);
assertEquals(getCardValue("10\u2665"), 10);
assertEquals(getCardValue("J\u2663"), 10);
assertEquals(getCardValue("Q\u2666"), 10);
assertEquals(getCardValue("K\u2666"), 10);

try {
  getCardValue("invalid");
  console.error("Error was not thrown for invalid card");
} catch (e) {
  console.log("Error thrown for invalid card");
}
