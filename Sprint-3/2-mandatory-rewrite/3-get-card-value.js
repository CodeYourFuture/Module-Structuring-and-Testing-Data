function getCardValue(rank) {
  if (typeof rank !== "string" || rank.length < 2) {
    throw new Error("Invalid card format");
  }

  const card = rank.slice(0, -1); // removing last character to get card rank
  // array of valid ranks
  const validRanks = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  // actual values of ranks in respective order
  const rankValues = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
  const index = validRanks.indexOf(card); // getting a rank
  if (index !== -1) {
    // if index rank actually exists return the rankValue
    return rankValues[index];
  } else {
    throw new Error("Invalid card rank");
  }
}
module.exports = getCardValue;
