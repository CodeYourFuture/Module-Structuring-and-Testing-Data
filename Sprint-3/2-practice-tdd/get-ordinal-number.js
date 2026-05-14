function getOrdinalNumber(num) {
  if (!Number.isInteger(num) || num < 1) {
    throw new Error("Invalid number");
  }

  const lastTwoDigits = num.toString().slice(-2);
  const lastDigit = lastTwoDigits.slice(-1);
  if (lastTwoDigits == 11 || lastTwoDigits == 12 || lastTwoDigits == 13) {
    return `${num}th`;
  }
  if (lastDigit == 1) {
    return `${num}st`;
  }
  if (lastDigit == 2) {
    return `${num}nd`;
  }
  if (lastDigit == 3) {
    return `${num}rd`;
  } else return `${num}th`;
}

module.exports = getOrdinalNumber;
