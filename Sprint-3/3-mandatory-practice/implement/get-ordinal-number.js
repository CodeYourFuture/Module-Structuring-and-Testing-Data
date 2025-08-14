function getOrdinalNumber(number) {
  // Reject invalid inputs
  if (!Number.isInteger(number) || number <= 0)
    return "Not a valid number input";

  const lastDigit = number % 10;
  const lastTwoDigits = number % 100; // Check the last 2 digits for exceptions 11, 12 and 13

  // Handle exceptions for numbers ending in 11, 12 or 13
  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return `${number}th`;
  }

  switch (lastDigit) {
    case 1:
      return `${number}st`;
    case 2:
      return `${number}nd`;
    case 3:
      return `${number}rd`;
    default:
      return `${number}th`;
  }
}

module.exports = getOrdinalNumber;
