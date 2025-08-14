function getOrdinalNumber(num) {
  let lastDigit = num.toString().slice(-1);
  let last2Digit = num.toString().slice(-2);
  let numToString = num.toString();

  if (["11", "12", "13"].includes(last2Digit)) {
    return numToString + "th";
  } else if (lastDigit === "1") {
    return numToString + "st";
  } else if (lastDigit === "2") {
    return numToString + "nd";
  } else if (lastDigit === "3") {
    return numToString + "rd";
  } else {
    return numToString + "th";
  }
}

module.exports = getOrdinalNumber;
