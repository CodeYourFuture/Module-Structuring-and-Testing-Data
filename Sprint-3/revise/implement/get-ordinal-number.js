function getOrdinalNumber(number) {
  const lastDigit = number % 10;
  const lastTwoDigits = number % 100;

  let suffix = "th";

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    suffix = "th";
  } else if (lastDigit === 1) {
    suffix = "st";
  } else if (lastDigit === 2) {
    suffix = "nd";
  } else if (lastDigit === 3) {
    suffix = "rd";
  }

  return number + suffix;
}

module.exports = getOrdinalNumber;
