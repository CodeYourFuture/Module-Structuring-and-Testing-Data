function getOrdinalNumber(num) {
  if (num % 10 === 1) {
    if (num === 11) {
      return "11th";
    } else {
      return `${num}st`;
    }
  } else if (num % 10 === 2) {
    if (num === 12) {
      return "12th";
    } else {
      return `${num}nd`;
    }
  } else if (num % 10 === 3) {
    if (num === 13) {
      return "13th";
    } else {
      return `${num}rd`;
    }
  } else {
    return `${num}th`;
  }
}

module.exports = getOrdinalNumber;