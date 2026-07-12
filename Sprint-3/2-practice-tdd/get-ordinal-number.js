function getOrdinalNumber(num) {
  let numberValue = num;
  let lastDigit = numberValue % 10;
  let lastTwoDigit = numberValue % 100;
  if (lastTwoDigit === 11 || lastTwoDigit === 12 || lastTwoDigit === 13) {
    return String(numberValue) + "th";
  }
  if (lastDigit === 1) {
    return String(numberValue) + "st";
  }
  if (lastDigit === 2) {
    return String(numberValue) + "nd";
  }
  if (lastDigit === 3) {
    return String(numberValue) + "rd";
  } else return String(numberValue) + "th";
}

module.exports = getOrdinalNumber;
