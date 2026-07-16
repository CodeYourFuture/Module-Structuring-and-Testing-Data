function getOrdinalNumber(num) {
  if (num % 100 === 11) {  
      return `${num}th` // 11 is a special case that should return "th" instead of "st". % 100 will return 11 for any number ending in 11, such as 111, 211, etc.
  } else if (num % 10 === 1) {
      return `${num}st`; // If the number ends with 1, except those ending with 11, return "st".
  } else if (num % 10 === 2) {
      return `${num}nd`
  } else if (num % 10 === 3) {
      return `${num}rd` // If the number ends with 2, return "nd". If the number ends with 3, return "rd".
  } else {
      return `${num}th` // For all other cases, return "th".
  }
}

module.exports = getOrdinalNumber;

console.log(getOrdinalNumber(1));
console.log(getOrdinalNumber(2));
console.log(getOrdinalNumber(3));
console.log(getOrdinalNumber(4));
console.log(getOrdinalNumber(11));
console.log(getOrdinalNumber(21));
console.log(getOrdinalNumber(52));
console.log(getOrdinalNumber(63));
console.log(getOrdinalNumber(111))
