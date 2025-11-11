function getOrdinalNumber(num) {
  const numberLastTwoDigits = num % 100;

  if (numberLastTwoDigits === 11 || numberLastTwoDigits === 12 || numberLastTwoDigits === 13) {
    return num + "th";
  }

  const numberLastDigit = num % 10;
  if (numberLastDigit === 1) return num + "st";
  if (numberLastDigit === 2) return num + "nd";
  if (numberLastDigit === 3) return num + "rd";
  return num + "th";
}

module.exports = getOrdinalNumber;
