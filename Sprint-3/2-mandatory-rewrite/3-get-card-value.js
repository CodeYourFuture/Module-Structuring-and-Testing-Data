function getCardValue(card) {
  const nosuit = card.slice(0, -1);
  if (nosuit === "A") {
    return 11;
  } else if (nosuit === "Q") {
    return 10;
  } else if (nosuit === "K") {
    return 10;
  } else if (nosuit === "J") {
    return 10;
  } else if (
    nosuit === "2" ||
    nosuit === "3" ||
    nosuit === "4" ||
    nosuit === "5" ||
    nosuit === "6" ||
    nosuit === "7" ||
    nosuit === "8" ||
    nosuit === "9" ||
    nosuit === "10"
  ) {
    return parseInt(nosuit);
  } else {
    throw new Error(`Invalid card rank.`);
  }
}
module.exports = getCardValue;
