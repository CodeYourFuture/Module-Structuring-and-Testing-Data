function getOrdinalNumber(num) {
  const lastTwo = num % 100; // handle teen exceptions
  if (lastTwo === 11 || lastTwo === 12 || lastTwo === 13) {
    return num + "th";
  }

  const lastDigit = num % 10;
  if (lastDigit === 1) return num + "st";
  if (lastDigit === 2) return num + "nd";
  if (lastDigit === 3) return num + "rd";

  return num + "th";
}

module.exports = getOrdinalNumber;
