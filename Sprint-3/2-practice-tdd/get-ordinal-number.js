function getOrdinalNumber(num) {
  // Early return for invalid inputs
  if (!Number.isInteger(num)) {
    return "Invalid input: Input is an integer";
  }

  const absNum = Math.abs(num);
  const lastTwo = absNum % 100;
  const lastDigit = absNum % 10;

  // Handle special cases: 11th, 12th, 13th
  if (lastTwo === 11 || lastTwo === 12 || lastTwo === 13) {
    return `${num}th`;
  }

  // Handle regular suffixes
  if (lastDigit === 1) {
    return `${num}st`;
  }

  if (lastDigit === 2) {
    return `${num}nd`;
  }

  if (lastDigit === 3) {
    return `${num}rd`;
  }
  // Default suffix
  return `${num}th`;
}

module.exports = getOrdinalNumber;
