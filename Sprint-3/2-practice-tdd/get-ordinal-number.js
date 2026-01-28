function getOrdinalNumber(num) {
  let stringNum = num.toString();
  let lastDigit = stringNum[stringNum.length - 1];
  if (lastDigit === "1" && num % 100 !== 11) {
    return stringNum + "st";
  } else if (lastDigit === "2" && num % 100 !== 12) {
    return stringNum + "nd";
  } else if (lastDigit === "3" && num % 100 !== 13) {
    return stringNum + "rd";
  } else {
    return stringNum + "th";
  }
}

module.exports = getOrdinalNumber;
