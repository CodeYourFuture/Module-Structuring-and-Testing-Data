function getOrdinalNumber(num) {
  const lastTwoDigits = num % 100;
  const lastDigit = num % 10;

  // Handle teen exceptions first (11th, 12th, 13th, 111th, etc.)
  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return `${num}th`;
  }

  // Handle standard suffix rules based on the last digit
  if (lastDigit === 1) return `${num}st`;
  if (lastDigit === 2) return `${num}nd`;
  if (lastDigit === 3) return `${num}rd`;

  // Default for 0, 4-9
  return `${num}th`;
}

module.exports = getOrdinalNumber;
