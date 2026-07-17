function getOrdinalNumber(num) {
  if (num % 100 === 11) {
      return `${num}th`;
  } else if (num % 100 === 12) {
      return `${num}th`;
  } else if (num % 100 === 13) {
      return `${num}th`;
  } else if (num % 10 === 1) {
      return `${num}st`;
  } else if (num % 10 === 2) {
      return `${num}nd`
  } else if (num % 10 === 3) {
      return `${num}rd`
  } else {
      return `${num}th`
  }
}

module.exports = getOrdinalNumber;

console.log(getOrdinalNumber(1));
console.log(getOrdinalNumber(2));
console.log(getOrdinalNumber(3));
console.log(getOrdinalNumber(4));
console.log(getOrdinalNumber(11));
console.log(getOrdinalNumber(12));
console.log(getOrdinalNumber(13));
console.log(getOrdinalNumber(21));
console.log(getOrdinalNumber(52));
console.log(getOrdinalNumber(63));
console.log(getOrdinalNumber(111))

