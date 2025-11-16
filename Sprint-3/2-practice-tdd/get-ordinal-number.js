
function getOrdinalNumber(num) {
  const remainder10 = num % 10;
  const remainder100 = num % 100;

  if (remainder100 >= 11 && remainder100 <= 13) {
    return `${num}th`;
  }

  switch (remainder10) {
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


