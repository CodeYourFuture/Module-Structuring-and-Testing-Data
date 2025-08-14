function getOrdinalNumber(num) {
  numToString = String(num);
  lastDigit = numToString[numToString.length - 1]
  if (lastDigit == 1 && num != 11) {
    return `${num}st`;
  } else if (lastDigit == 2 && num != 12) {
    return `${num}nd`;
  } else if (lastDigit == 3 && num != 13) {
    return `${num}rd`;
  } else {
    return `${num}th`;
  }
}

module.exports = getOrdinalNumber;
