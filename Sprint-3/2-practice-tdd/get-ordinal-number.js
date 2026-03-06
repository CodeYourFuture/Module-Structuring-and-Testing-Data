function getOrdinalNumber(num) {
  const lastTwoDigits = num % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return String(num) + "th";
  }

  const lastDigit = num % 10;
  switch (lastDigit) {
    case 1:
      return String(num) + "st";
    case 2:
      return String(num) + "nd";
    case 3:
      return String(num) + "rd";
    default:
      return String(num) + "th";
  }
}

module.exports = getOrdinalNumber;
