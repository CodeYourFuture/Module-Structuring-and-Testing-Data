function getOrdinalNumber(num) {
  const lastDigit = num % 10;
  const lastTwoDigits = num % 100;

  if (lastDigit === 1 && lastTwoDigits !== 11) {
    return num + "st";
  } else if (lastDigit === 2 && lastTwoDigits !== 12) {
    return num + "nd";
  } else if (lastDigit === 3 && lastTwoDigits !== 13) {
    return num + "rd";
  } else {
    return num + "th";
  }
}

module.exports = getOrdinalNumber;
