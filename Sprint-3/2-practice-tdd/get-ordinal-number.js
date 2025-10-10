function getOrdinalNumber(num) {
  const last2Digit = num % 100;
  const last1Digit = num % 10;

  if (last2Digit >= 11 && last2Digit <= 13) {
    return num + "th";
  }

  switch (last1Digit) {
    case 1:
      return num + "st";
    case 2:
      return num + "nd";
    case 3:
      return num + "rd";
    default:
      return num + "th";
  }
}

module.exports = getOrdinalNumber;
