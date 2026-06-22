function getOrdinalNumber(num) {
  const endDigit = num % 10;
  const endTwoDigits = num % 100;
  if (endTwoDigits >= 11 && endTwoDigits <= 13) return num + "th";
  if (endDigit === 1) return num + "st";
  if (endDigit === 2) return num + "nd";
  if (endDigit === 3) return num + "rd";
  return num + "th";
}

module.exports = getOrdinalNumber;
