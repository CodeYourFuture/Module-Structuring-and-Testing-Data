function getOrdinalNumber(num) {
  const remainderTen = num % 10;
  const remainderHundred = num % 100;

  if (remainderHundred >= 11 && remainderHundred <= 13) {
    return `${num}th`;
  }

  switch (remainderTen) {
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
