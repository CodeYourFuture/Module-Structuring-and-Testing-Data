function getOrdinalNumber(num) {
// return "1st";
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

console.log(getOrdinalNumber(1));
console.log(getOrdinalNumber(2));
console.log(getOrdinalNumber(3));
console.log(getOrdinalNumber(4));
module.exports = getOrdinalNumber;