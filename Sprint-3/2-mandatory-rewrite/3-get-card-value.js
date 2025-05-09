function getCardValue(card) {
  // replace with your code from key-implement
  if (card.startsWith("10")) {
    // Check for "10" before extracting first character
    return 10;
  }
  const rank = card.charAt(0);
  if (rank === "A") {
    return 11;
  } else if (rank === "K") {
    return 10;
  } else if (rank === "Q") {
    return 10;
  } else if (rank === "J") {
    return 10;
  } else if (rank === "1") {
    return 1;
  } else if (rank === "2") {
    return 2;
  } else if (rank === "3") {
    return 3;
  } else if (rank === "4") {
    return 4;
  } else if (rank === "5") {
    return 5;
  } else if (rank === "6") {
    return 6;
  } else if (rank === "7") {
    return 7;
  } else if (rank === "8") {
    return 8;
  } else if (rank === "9") {
    return 9;
  } else {
    return "Invalid Card Rank";
  }
}
module.exports = getCardValue;
