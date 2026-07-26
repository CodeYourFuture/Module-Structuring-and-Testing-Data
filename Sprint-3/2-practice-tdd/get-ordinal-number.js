function getOrdinalNumber(num) {
  const lastDigit = num % 10;
  const lastTwoDigits = num % 100;

   // Special cases: 11, 12, 13
  if (lastTwoDigits === 11 || lastTwoDigits === 12 || lastTwoDigits === 13) {
    return `${num}th`;
  }

// Numbers ending in 1
  if (lastDigit === 1) {
    return `${num}st`;
  }

  // Numbers ending in 2
  if (lastDigit === 2) {
    return `${num}nd`;
  }

  // Numbers ending in 3
  if (lastDigit === 3) {
    return `${num}rd`;
  }

  // Everything else
  return `${num}th`;
}


module.exports = getOrdinalNumber;
