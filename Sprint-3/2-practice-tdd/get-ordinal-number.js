function getOrdinalNumber(num) {
  let last2Digit = num % 100;
  let las1Digit = num % 10;
  if (last2Digit >= 11 && last2Digit <= 13) {
    return num + "th";
  }
  if (las1Digit === 1) {
    return num + "st";
  } else if (las1Digit === 2) {
    return num + "nd";
  } else if (las1Digit === 3) {
    return num + "rd";
  } else {
    return num + "th";
  }
}

module.exports = getOrdinalNumber;
