function getOrdinalNumber(num) {
  if (num === 0) {
    return "0";
  }

  const lastTwoDigits = num % 100;
  const lastDigit = num % 10;

  switch (true) {
    case lastTwoDigits === 11:
    case lastTwoDigits === 12:
    case lastTwoDigits === 13:
      return `${num}th`;
    case lastDigit === 1:
      return `${num}st`;
    case lastDigit === 2:
      return `${num}nd`;
    case lastDigit === 3:
      return `${num}rd`;
    default:
      return `${num}th`;
  }
}

module.exports = getOrdinalNumber;