function getOrdinalNumber(num) {
  let lastTwoDigits = num % 100;
  let lastDigit = num % 10;
  if (lastTwoDigits === 11 || lastTwoDigits === 12 || lastTwoDigits === 13) {
    return num + "th";
  } else if (lastDigit === 1) {
    return num + "st";
  } else if (lastDigit === 2) {
    return num + "nd";
  } else if (lastDigit === 3) {
    return num + "rd";
  } else return num + "th";
}

module.exports = getOrdinalNumber;
