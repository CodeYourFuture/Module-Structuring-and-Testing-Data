function getOrdinalNumber(num) {
  const remainderTen = num % 10;
  const remainderHundred = num % 100;

  if (remainderTen === 1 && remainderHundred !== 11) {
    return `${num}st`;
  } else if (remainderTen === 2 && remainderHundred !== 12) {
    return `${num}nd`;
  } else if (remainderTen === 3 && remainderHundred !== 13) {
    return `${num}rd`;
  } else {
    return `${num}th`;
  }
}

module.exports = getOrdinalNumber;
