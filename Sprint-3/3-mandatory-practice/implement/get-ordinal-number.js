function getOrdinalNumber(num) {
  const remainder10 = num % 10;
  const remainder100 = num % 100;

  if (remainder100 >= 11 && remainder100 <= 13) { //deals with numbers 11,12,13
    return `${num}th`;               //using template literal to combine num with a string th.
  }

  if (remainder10 === 1) return `${num}st`; 
  if (remainder10 === 2) return `${num}nd`;
  if (remainder10 === 3) return `${num}rd`;

  return `${num}th`;
}

module.exports = getOrdinalNumber;