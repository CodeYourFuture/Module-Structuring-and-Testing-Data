function getOrdinalNumber(num) {
  const lastDigitString = String(num).slice(-1);
  const lastTwoDiditString = String(num).slice(-2);

  let lastDigit = Number(lastDigitString);
  let lastTwoDigit = Number(lastTwoDiditString);

  if (lastTwoDigit === 11 || lastTwoDigit === 12 || lastTwoDigit === 13) {
    return `${num}th`;
  } else {
    switch (lastDigit) {
      case 1:
        return `${num}st`;
        break;
      case 2:
        return `${num}nd`;
        break;
      case 3:
        return `${num}rd`;
        break;
      default:
        return `${num}th`;
    }
  }
}
module.exports = getOrdinalNumber;
