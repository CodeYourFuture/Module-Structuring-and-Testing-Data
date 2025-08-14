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
console.log(getOrdinalNumber(11));
console.log(getOrdinalNumber(12));
console.log(getOrdinalNumber(13));
console.log(getOrdinalNumber(21));
console.log(getOrdinalNumber(22));    
console.log(getOrdinalNumber(23));
console.log(getOrdinalNumber(101));
console.log(getOrdinalNumber(102));     
console.log(getOrdinalNumber(103)); 
console.log(getOrdinalNumber(111));   
console.log(getOrdinalNumber(112)); 
console.log(getOrdinalNumber(113));
module.exports = getOrdinalNumber;