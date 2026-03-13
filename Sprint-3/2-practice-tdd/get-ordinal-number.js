function getOrdinalNumber(num) {
  // 1. Handle the 11, 12, 13 exceptions first
  if (num === 11 || num === 12 || num === 13) {
    return num + "th";
  }

  const lastDigit = num % 10;

  if (lastDigit === 1) {
    return num + "st";
  }

  if (lastDigit === 2) {
    return num + "nd";
  }

  if (lastDigit === 3) {
    return num + "rd";
  }

  return num + "th";
}

module.exports = getOrdinalNumber;
