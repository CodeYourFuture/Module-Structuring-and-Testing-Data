function getOrdinalNumber(input) {
  const lastDigit = input % 10;
  const lastTwoDigits = input % 100;
  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return input + "th";
  } else if (lastDigit === 1) {
    return input + "st";
  } else if (lastDigit === 2) {
    return input + "nd";
  } else if (lastDigit === 3) {
    return input + "rd";
  } else {
    return input + "th";
  }
}
module.exports = getOrdinalNumber;
