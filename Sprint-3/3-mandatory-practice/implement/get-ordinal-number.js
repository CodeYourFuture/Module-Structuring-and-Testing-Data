function getOrdinalNumber(num) {
  if (typeof num !== "number" || num < 1) {
    throw new Error("Input must be a positive number");
  }

  const lastDigit = num % 10;
  const lastTwoDigits = num % 100;

  if ([11, 12, 13].includes(lastTwoDigits)) {
    return `${num}th`;
  }

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
