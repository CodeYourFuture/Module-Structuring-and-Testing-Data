function getOrdinalNumber(num) {
  const stringNum = String(num);
  const paddedLast2Digit = stringNum.padStart(2, "0").slice(-2);
  const numberValue = Number(paddedLast2Digit);

  if (numberValue >= 11 && numberValue <= 13) {
    return `${stringNum}th`;
  }
  if (stringNum.endsWith("1")) {
    return `${stringNum}st`;
  }
  if (stringNum.endsWith("2")) {
    return `${stringNum}nd`;
  }
  if (stringNum.endsWith("3")) {
    return `${stringNum}rd`;
  }
  return `${stringNum}th`;
}

module.exports = getOrdinalNumber;
