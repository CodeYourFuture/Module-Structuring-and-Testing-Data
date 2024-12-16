function getOrdinalNumber(number) {
  // Reject invalid inputs
  if (!Number.isInteger(number) || number <= 0)
    return "Not a valid number input";

  // I'm going to be using the string type for my logic
  const numberAsString = number.toString();

  // Helper variable
  const exceptions = [11, 12, 13];
  const lastDgit = number % 10;
  const lastTwoDigits = number % 100;

  if (number > 9 && exceptions.includes(lastTwoDigits)) {
    return `${number}th`;
  }

  switch (lastDgit) {
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

