function getOrdinalNumber(num) {
  let onesDigit = Number(String(num).slice(-1)); //extract the figure at the tens digit, and convert it into a number.
  let tensDigit;
  if (String(num).length > 1) {
    tensDigit = Number(String(num).slice(-2, -1)); //extract the figure at the tens digit, and convert it into a number.
  }
  if (tensDigit === 1) {
    return num + "th";
  } else {
    if (onesDigit === 1) {
      return num + "st";
    } else if (onesDigit === 2) {
      return num + "nd";
    } else if (onesDigit === 3) {
      return num + "rd";
    } else {
      return num + "th";
    }
  }
}

module.exports = getOrdinalNumber;
