function getOrdinalNumber(num) {
  const remainderTens = num % 10;
  const remainderHundreds = num % 100;

  if (remainderHundreds >= 11 && remainderHundreds <= 13) {
    return `${num}th`;
  }

  if (remainderTens === 1) return `${num}st`;

  if (remainderTens === 2) return `${num}nd`;

  if (remainderTens === 3) return `${num}rd`;

  return `${num}th`;
}

module.exports = getOrdinalNumber;
