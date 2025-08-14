function getCardValue(card) {
    // replace with your code from key-implement
    let rank = card.slice(0, -1); // this line removes the emojis

    const rangeTwoToTenArray = ["2", "3", "4", "5", "6", "7", "8", "9", "10"];//

    if (rank === "A") {
      return 11;
    } else if (rangeTwoToTenArray.includes(rank)) {
      return parseInt(rank);
    } else if (rank === "J" || rank === "Q" || rank === "K") {
      return 10;
    } else {
      throw new Error("Invalid Card rank.");
    }
}

module.exports = getCardValue;
