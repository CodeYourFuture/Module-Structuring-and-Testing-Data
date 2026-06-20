function getOrdinalNumber(num) {
  // Validate input: must be a number (not a string, null or undefined) and not NaN
  if (typeof num !== "number" || Number.isNaN(num)) {
    throw new TypeError("Input must be a number");
  }

  const abs = Math.abs(num);
  const lastTwoDigits = abs % 100;
  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return `${num}th`;
  }
  const lastDigit = lastTwoDigits % 10;
  if (lastDigit === 1) {
    return `${num}st`;
  }
  if (lastDigit === 2) {
    return `${num}nd`;
  }
  if (lastDigit === 3) {
    return `${num}rd`;
  }
  return `${num}th`;
}

module.exports = getOrdinalNumber;
