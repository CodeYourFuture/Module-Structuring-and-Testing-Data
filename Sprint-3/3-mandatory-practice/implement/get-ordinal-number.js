function getOrdinalNumber(num) {
  if (num === 1) {
    return "1st";
  }
  if (num === 2 || num === 3) {
    return num + "d";
  }
  if (num > 2) {
    return num + "th";
  } else {
    return "Error";
  }
}

module.exports = getOrdinalNumber;
