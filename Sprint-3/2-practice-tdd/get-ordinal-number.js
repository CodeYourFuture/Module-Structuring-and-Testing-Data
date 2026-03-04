function getOrdinalNumber(number) {
  const lastTwoDigits = number % 100;
  if (lastTwoDigits === 11 || lastTwoDigits === 12 || lastTwoDigits === 13) {
    return number + "th";
  }
  const lastDigit = number % 10;
  let suffix;
  if (lastDigit === 1) {
    suffix = "st";
  } else if (lastDigit === 2) {
    suffix = "nd";
  } else if (lastDigit === 3) {
    suffix = "rd";
  } else {
    suffix = "th";
  }

  return number + suffix;
}

module.exports = getOrdinalNumber;
