function getOrdinalNumber(num) {
  const n = Math.abs(parseInt(num, 10));
  const lastTwoDigits = n % 100;
  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return `${n}th`;
  }
  const lastDigit = n % 10;
  switch (lastDigit) {
    case 1:
      return `${n}st`;
    case 2:
      return `${n}nd`;
    case 3:
      return `${n}rd`;
    default:
      return `${n}th`;
  }
}

module.exports = getOrdinalNumber;
