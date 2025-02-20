function getOrdinalNumber(num) {
  numToString = String(num);
  if (numToString[numToString.length - 1] == 1 && num != 11) {
    return `${num}st`;
  } else if (numToString[numToString.length - 1] == 2 && num != 12) {
    return `${num}nd`;
  } else if (numToString[numToString.length - 1] == 3 && num != 13) {
    return `${num}rd`;
  } else {
    return `${num}th`;
  }
}

module.exports = getOrdinalNumber;
