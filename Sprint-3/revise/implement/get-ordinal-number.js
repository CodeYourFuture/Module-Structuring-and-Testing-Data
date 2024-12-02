function getOrdinalNumber(num) {
  const ones = num % 10;
  const tens = Math.floor(num / 10) % 10;

  if (tens === 1) {
    return `${num}th`;
  }

  switch (ones) {
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
