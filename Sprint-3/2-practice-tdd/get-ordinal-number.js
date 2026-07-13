function getOrdinalNumber(num) {
  const lastDigit = num % 10;
  const lastTwoDigits = num % 100;

  if (!Number.isInteger(num) || num < 1) {
    throw new Error("Input must be a positive integer");
  }

  if (lastDigit === 1 && lastTwoDigits !== 11) {
    return `${num}st`;
  }

  if (lastDigit === 2 && lastTwoDigits !== 12) {
    return `${num}nd`;
  }

  if (lastDigit === 3 && lastTwoDigits !== 13) {
    return `${num}rd`;
  }

  return `${num}th`;
}

module.exports = getOrdinalNumber;
