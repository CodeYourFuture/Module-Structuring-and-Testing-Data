function getOrdinalNumber(num) {
  const lastDigit = num % 10;
  const lastTwoDigits = num % 100;
  if (lastDigit === 1 && lastTwoDigits !== 11) {
    return `${num}st`;
  }
  return `${num}th`;
}

module.exports = getOrdinalNumber;
