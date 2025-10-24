function getOrdinalNumber(num) {
  // Ensure the input is a valid number
  if (typeof num !== "number" || isNaN(num)) {
    return "";
  }

  const lastTwoDigits = num % 100;
  const lastDigit = num % 10;

  // Handle special cases: 11th, 12th, 13th
  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return `${num}th`;
  }

  // Handle normal ordinal endings
  switch (lastDigit) {
    case 1:
      return `${num}st`;
    case 2:
      return `${num}nd`;
    case 3:
      return `${num}rd`;
    default:
      return `${num}th`;
  }
}

module.exports = getOrdinalNumber;
