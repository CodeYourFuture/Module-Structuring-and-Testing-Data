function getOrdinalNumber(num) {
  const lastTwoDigits = num % 100;
  const lastOneDigit = num % 10;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) return `${num}th`;

  switch (lastOneDigit) {
    case 1: return `${num}st`;
    case 2: return `${num}nd`;
    case 3: return `${num}rd`;
    default: return `${num}th`;
  }
};
// console.log(getOrdinalNumber(13));// prints 13th

module.exports = getOrdinalNumber;